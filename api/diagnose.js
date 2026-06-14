module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') return res.status(200).json({status: 'ok'});
  if (req.method !== 'POST') return res.status(405).json({error: 'Method not allowed'});
  try {
    const { prompt, image, mime } = req.body;
    const content = [];
    if (image) content.push({type:'image', source:{type:'base64', media_type: mime||'image/jpeg', data: image}});
    content.push({type:'text', text: prompt});
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({model:'claude-haiku-4-5-20251001', max_tokens:2048, messages:[{role:'user', content}]})
    });
    const data = await response.json();
    if (!response.ok || data.type === 'error') return res.status(400).json({error: data.error?.message||JSON.stringify(data)});
    return res.status(200).json({text: data.content.map(b=>b.text||'').join('')});
  } catch(e) {
    return res.status(500).json({error: e.message});
  }
};

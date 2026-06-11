# ZiraatDoktoru — GitHub Pages Kurulum

## Klasör Yapısı
```
ziraatdoktoru/
├── index.html          ← Ana sayfa
├── ansiklopedi.html    ← 500+ bitki
├── blog.html           ← Otomatik AI blog
├── teshis.html         ← Hastalık teşhisi
├── bitki.html          ← Bitki detay
├── makale.html         ← Blog makale
├── hakkimizda.html     ← AdSense zorunlu
├── gizlilik.html       ← AdSense zorunlu
├── iletisim.html       ← AdSense zorunlu
├── sitemap.xml
├── robots.txt
└── assets/
    ├── style.css
    └── app.js
```

## GitHub Pages
1. GitHub'da repo oluştur: `ziraatdoktoru`
2. Tüm dosyaları yükle
3. Settings → Pages → Branch: main
4. Site: `https://kullaniciadi.github.io/ziraatdoktoru`

## Özel Domain (ziraatdoktoru.com)
1. Domain DNS: CNAME → `kullaniciadi.github.io`
2. GitHub Settings → Pages → Custom domain → `ziraatdoktoru.com`

## Blog Otomasyonu
- blog.html'i aç → "Türkçe Makale Oluştur" butonuna bas
- Her gün saat 12:00'de otomatik 1 yazı yayınlanır
- 100 farklı konu hazır (TOPICS dizisinde)

## Google AdSense
1. AdSense başvurusu yap (20-30 yazı oluşturduktan sonra)
2. Onay gelince her sayfadaki `<!-- Google AdSense -->` yorumunu aç
3. `.ad-slot` div'lerini gerçek `<ins class="adsbygoogle">` ile değiştir

## AdSense Kontrol Listesi
- [x] Privacy Policy (gizlilik.html)
- [x] About (hakkimizda.html)
- [x] Contact (iletisim.html)
- [x] Mobil uyumlu
- [x] HTTPS (GitHub Pages otomatik)
- [x] Özgün içerik
- [x] Net navigasyon
- [x] sitemap.xml + robots.txt
- [ ] 20-30 blog yazısı oluştur
- [ ] Google Search Console'a ekle
- [ ] Sitemap'i Google'a gönder

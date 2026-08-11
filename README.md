# MEKVERA Website — V4

MEKVERA **PROJE • TASARIM • UYGULAMA** markasının Next.js App Router + TypeScript web sitesi.

## V4 yenilikleri
- Yeni, daha sade ve akılda kalıcı **M/V monogramı**
- Ana domain: `https://mekvera.com`
- `Organization` structured data
- Gerçek iletişim bilgileri
- Telefon ve WhatsApp hızlı iletişim butonları
- Çalışan "Projenizi Anlatın" formu
- Form taleplerinin Resend üzerinden `info@mekvera.com` adresine gönderilmesi
- Form doğrulama ve kullanıcı başarı/hata mesajları
- robots.txt / sitemap / canonical alan adı güncellemesi

## Vercel gereksinimi
Vercel projesinde aşağıdaki environment variable bulunmalı:

`RESEND_API_KEY`

Resend Vercel entegrasyonu kurulduysa bu değer otomatik eklenmiş olabilir. Form deploy sonrasında test edilmelidir.

## Form e-posta akışı
`mekvera.com/iletisim` → `/api/proje-talebi` → Resend → `info@mekvera.com`

Gönderici: `MEKVERA Proje Talebi <form@mekvera.com>`

## Not
Gerçek proje görselleri ve doğrulanabilir referanslar sonraki sürümlerde eklenecektir. Sitede uydurma proje, müşteri, yıl veya metrekare istatistiği kullanılmamalıdır.

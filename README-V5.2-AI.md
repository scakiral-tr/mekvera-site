# MEKVERA V5.2 — AI Ön Proje Asistanı

Bu paket V5.1 üzerine hazırlanmıştır. Amaç, "Projenizi Anlatın" alanını yapay zekâ destekli gerçek bir ön-proje brief aracına dönüştürmek ve V5.1'de kalan eski rota / sitemap sorunlarını temizlemektir.

## Neler değişti?

### AI Ön Proje Asistanı
- Proje türü
- Şehir
- Yaklaşık m²
- Bütçe yaklaşımı
- Hedef teslim/açılış tarihi
- Serbest proje açıklaması

alır ve aşağıdaki yapılandırılmış çıktıyı üretir:
- Proje özeti
- Öncelikli başlıklar
- Tasarım yaklaşımı
- Teknik kontrol başlıkları
- Önerilen proje akışı
- Eksik / netleştirilmesi gereken bilgiler
- MEKVERA için önerilen sonraki adım

AI özellikle kesin fiyat, kesin süre, teknik uygunluk veya mevzuat garantisi üretmeyecek şekilde sınırlandırılmıştır.

### Dönüşüm
- AI sonucunu tek tıkla WhatsApp üzerinden +90 530 333 99 29 numarasına gönderebilir.
- AI sonucunu e-posta ile info@mekvera.com adresine aktarabilir.
- Sabit WhatsApp butonu korunur.

### Teknik / kurumsal temizlik
- Eski /projeler rotası ana sayfadaki Uygulamalar alanına yönlenir.
- Eski /kurumsal, /hizmetler ve /iletisim rotaları yeni V5.2 ana sayfa bölümlerine yönlenir.
- Eski blog kökü ana sayfaya yönlenir ve blog ağacı noindex olur.
- Eski kullanılmayan /api/proje-talebi endpoint'i 410 ile kapatılır.
- sitemap yalnızca aktif ana sayfayı yayınlar.
- robots.txt /api yollarını taramaya kapatır.

## ÖNEMLİ: OpenAI API anahtarı GitHub'a yazılmaz

Kodun içinde API anahtarı yoktur. Anahtar yalnızca Vercel Environment Variables alanına eklenmelidir.

Vercel'de:
1. MEKVERA projesini açın.
2. Settings > Environment Variables bölümüne girin.
3. Name: OPENAI_API_KEY
4. Value: OpenAI Platform'dan oluşturduğunuz API anahtarı
5. Production, Preview ve Development için ekleyebilirsiniz; en az Production seçili olsun.
6. Save.
7. Deployments bölümünden en son deployment için Redeploy yapın.

Opsiyonel:
- Name: OPENAI_MODEL
- Value: gpt-5-mini

OPENAI_MODEL eklenmezse sistem zaten gpt-5-mini kullanır.

## API faturalandırması
ChatGPT Plus/Pro aboneliği OpenAI API kullanımını içermez. API platformu ayrıca faturalandırılır. API hesabında ödeme yöntemi / kullanılabilir bakiye bulunmalıdır.

## Hata davranışı
OPENAI_API_KEY yoksa veya OpenAI servisine erişilemiyorsa site çökmez. Kullanıcıya anlaşılır hata gösterilir ve WhatsApp ile devam etme seçeneği sunulur.

## Güvenlik / maliyet kontrolü
- API anahtarı yalnızca sunucu tarafında kullanılır; tarayıcıya gönderilmez.
- OpenAI Responses API isteğinde `store: false` kullanılır.
- Proje açıklaması 2400 karakterle sınırlıdır.
- Sunucu tarafında IP bazlı, best-effort istek sınırı vardır: 10 dakikada 6 analiz.
- Bu rate limit serverless ortamda tek başına kurumsal WAF yerine geçmez. Trafik büyürse Vercel Firewall veya kalıcı rate-limit servisi eklenmelidir.
- Kullanıcının iletişim bilgileri AI formunda istenmez.

## Yükleme dosyaları

Repo ana yapısında aşağıdaki dosyalar değişecek / eklenecek:

app/page.tsx
app/globals.css
app/layout.tsx
app/sitemap.ts
app/robots.ts
app/api/proje-ai/route.ts
app/api/proje-talebi/route.ts
app/projeler/page.tsx
app/kurumsal/page.tsx
app/hizmetler/page.tsx
app/iletisim/page.tsx
app/blog/page.tsx
app/blog/layout.tsx
components/AIProjectAssistant.tsx
package.json

`.env.example` sadece örnektir. Gerçek anahtar hiçbir zaman GitHub'a yüklenmemelidir.

## Kontrol
Kodlar TypeScript/TSX sözdizimi açısından kontrol edilmiştir. CSS süslü parantez dengesi doğrulanmıştır. Bu çalışma ortamında npm bağımlılık kurulumu ağ zaman aşımına uğradığı için gerçek OpenAI API anahtarıyla uçtan uca production çağrısı burada yapılamamıştır. Canlı test, Vercel'e OPENAI_API_KEY eklendikten sonra yapılmalıdır.

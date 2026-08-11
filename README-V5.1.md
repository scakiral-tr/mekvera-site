# MEKVERA V5.1

Bu sürüm, canlı V5 üzerinde kurumsal görünümü ve dönüşümü güçlendiren düzenlemedir.

## V5.1'de yapılanlar

- Ziyaretçiye görünen hazırlık / geliştirme notları tamamen kaldırıldı.
- "Gerçek işler geldikçe burada yayınlayacağız" proje bölümü yayından kaldırıldı.
- Projeler menüsü, gerçek portföy yayınlanana kadar kaldırıldı.
- Hakkımızda bölümü eklendi.
- Uygulama Alanları metni kurumsal dile çevrildi.
- "Temsili Görsel" yerine daha temiz "Kategori Görseli" etiketi kullanıldı.
- İş Yeri görseli ofisten ayrıştırılarak kafe/restoran/ticari işletme karakterine getirildi.
- Fuar Standı görselindeki MEKVERA marka algısı kaldırıldı; kategori görseli olarak kullanılıyor.
- CTA metni yeniden yazıldı.
- CTA alanına E-posta + WhatsApp seçenekleri eklendi.
- Sabit WhatsApp butonu korunarak +90 530 333 99 29 numarasına bağlandı.
- Footer telefon, e-posta ve WhatsApp ile güçlendirildi.
- Mobil hamburger menü eklendi.
- Hakkımızda / Uygulamalar / Hizmetler / Süreç / İletişim menü akışı düzenlendi.
- SEO metadata, canonical ve sosyal paylaşım metadata alanları güçlendirildi.
- Reduced-motion erişilebilirlik desteği eklendi.

## Yükleme

En güvenli yöntem:
1. Mevcut GitHub reposunda `app/page.tsx`, `app/globals.css`, `app/layout.tsx` ve `package.json` dosyalarını bu pakettekilerle değiştirin.
2. `public/images/is-yeri.webp` ve `public/images/fuar-standi.webp` dosyalarını yenileriyle değiştirin.
3. Commit mesajı: `MEKVERA V5.1 kurumsal iyilestirmeler`
4. Vercel deploy tamamlandıktan sonra mekvera.com'u yenileyin.

## Önemli

- Uygulama Alanları içindeki görseller kategori anlatımı içindir; gerçek proje referansı olarak sunulmaz.
- Gerçek MEKVERA portföyü geldiğinde "Projeler" alanı ayrı ve doğrulanabilir proje bilgileriyle yeniden açılmalıdır.
- KVKK / Gizlilik metinleri bu pakete eklenmedi. Şirketin tam ticari unvanı, veri sorumlusu bilgileri ve hukuki metinler netleşmeden varsayımsal hukuki içerik yayınlamak doğru olmaz.
- Adres ve sosyal medya URL'leri verilmediği için footer'a tahmini bilgi eklenmedi.

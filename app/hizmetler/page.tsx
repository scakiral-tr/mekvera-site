import type { Metadata } from 'next';
export const metadata: Metadata = { title:'Hizmetler', description:'Ofis, otel, hastane, mağaza, düğün salonu, villa ve konut projelerinde tasarım, renovasyon ve anahtar teslim uygulama.' };
const items=[
 ['ofis','Ofis Tadilatı ve Dekorasyonu','Kurumsal kimliğe, çalışma kültürüne ve operasyonel ihtiyaçlara göre ofis tasarımı, teknik proje, özel imalat ve anahtar teslim uygulama.'],
 ['otel','Otel Renovasyonu ve Dekorasyonu','Oda, lobi, restoran ve ortak alanlarda misafir deneyimini güçlendiren renovasyon ve iç mimari çözümler.'],
 ['magaza','Mağaza ve Dükkan Dekorasyonu','Marka kimliğini satış alanına taşıyan, müşteri akışını ve ürün sergilemeyi destekleyen konsept ve uygulama.'],
 ['hastane','Hastane ve Sağlık Yapıları','Hijyen, dayanıklılık, yönlendirme ve kullanıcı konforunu birlikte ele alan yenileme ve dekorasyon çözümleri.'],
 ['dugun-salonu','Düğün Salonu Konsept ve Uygulama','Kapasite, sahne, ışık, akustik ve servis operasyonunu dikkate alan bütüncül salon tasarımı.'],
 ['villa','Villa Tasarım ve Uygulama','Kişiye özel yaşam senaryosu, malzeme seçimi, sabit mobilya ve anahtar teslim uygulama.'],
 ['konut','Ev ve Konut Yenileme','Mevcut konutların plan, malzeme, aydınlatma ve mobilya bütünlüğüyle yeniden ele alınması.']
];
export default function Page(){return <><section className="page-hero"><div className="shell"><span className="eyebrow">HİZMETLER</span><h1>Tasarımdan uygulamaya<br/>tek ekip.</h1><p>Her hizmet alanında tasarım kararlarını saha gerçekleri, bütçe ve teslim takvimiyle birlikte yönetiyoruz.</p></div></section><section className="content-section"><div className="shell content-grid">{items.map(([id,t,d])=><article id={id} className="info-card" key={id}><h2>{t}</h2><p>{d}</p><p><strong>Kapsam:</strong> Keşif • Konsept • 3D • Teknik proje • Bütçe • Üretim • Uygulama • Teslim</p></article>)}</div></section></>}

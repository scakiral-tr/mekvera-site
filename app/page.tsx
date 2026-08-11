import Image from "next/image";

const areas = [
  {title:"Ofis",image:"/images/ofis.webp",desc:"Verimlilik, konfor ve kurum kimliğini birlikte ele alan çalışma alanları."},
  {title:"İş Yeri",image:"/images/is-yeri.webp",desc:"İşlevi, müşteri deneyimini ve marka dilini destekleyen ticari mekânlar."},
  {title:"Mağaza",image:"/images/magaza.webp",desc:"Markayı fiziksel mekânda güçlü biçimde anlatan satış alanları."},
  {title:"Düğün Salonu",image:"/images/dugun-salonu.webp",desc:"Atmosfer, dolaşım, kapasite ve operasyonu birlikte çözen mekânlar."},
  {title:"Villa & Konut",image:"/images/villa-konut.webp",desc:"Yaşam biçimine göre kurgulanan, detaylı ve kişiye özel iç mekân çözümleri."},
  {title:"Fuar Standı",image:"/images/fuar-standi.webp",desc:"Markayı fuar ortamında güçlü ve işlevsel biçimde temsil eden stand çözümleri."},
];

const services = [
 {n:"01",t:"Proje",d:"İhtiyaç analizi, keşif, ölçülendirme, teknik çözüm ve uygulanabilir proje altyapısı."},
 {n:"02",t:"Tasarım",d:"İşlev, estetik, malzeme, marka kimliği ve kullanıcı deneyiminin birlikte kurgulanması."},
 {n:"03",t:"Uygulama",d:"Üretim, satın alma, saha koordinasyonu, montaj ve kalite kontrolünün tek elden yönetimi."},
];

const process = ["Keşif & ihtiyaç analizi","Konsept tasarım","Teknik proje","Bütçe & program","Üretim & uygulama","Kontrol & teslim"];

export default function Home(){
 return <main>
  <header className="topbar">
    <a className="brand" href="#anasayfa"><strong>MEKVERA</strong><small>PROJE • TASARIM • UYGULAMA</small></a>
    <nav>
      <a href="#anasayfa">Ana Sayfa</a><a href="#uygulamalar">Uygulamalar</a><a href="#hizmetler">Hizmetlerimiz</a><a href="#projeler">Projeler</a><a href="#surec">Süreç</a><a href="#iletisim">İletişim</a>
    </nav>
    <a className="top-cta" href="#iletisim">Projenizi Anlatın <span>↗</span></a>
  </header>

  <section id="anasayfa" className="hero">
    <Image src="/images/hero-reception.webp" alt="Modern karşılama ve resepsiyon alanı — temsili MEKVERA kategori görseli" fill priority sizes="100vw"/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <p className="eyebrow">PROJE • TASARIM • UYGULAMA</p>
      <h1>FİKİRDEN<br/><span>GERÇEĞE</span></h1>
      <p className="hero-copy">Mekânlarınızı; tasarım gücü, teknik bilgi birikimi ve uygulama kabiliyetiyle fikirden anahtar teslim sonuca taşıyoruz.</p>
      <div className="hero-actions"><a className="btn gold" href="#iletisim">Projenizi Anlatın <span>→</span></a><a className="btn ghost" href="#uygulamalar">Uygulama Alanları</a></div>
    </div>
    <div className="hero-note"><b>Tek ekip.</b><span>Net sorumluluk.</span><span>Kontrollü uygulama.</span></div>
  </section>

  <section id="uygulamalar" className="section light">
    <div className="section-title"><div><p className="eyebrow dark">UYGULAMA ALANLARIMIZ</p><h2>Farklı mekânlar.<br/>Tek proje disiplini.</h2></div><p>Şimdilik kategori anlatımı için oluşturulmuş temsili görseller kullanıyoruz. Gerçek MEKVERA uygulamaları geldikçe aynı alanlarda proje fotoğrafları yayınlanacak.</p></div>
    <div className="area-grid">
      {areas.map((a,i)=><article className="area-card" key={a.title}>
        <div className="area-image"><Image src={a.image} alt={`${a.title} — temsili uygulama alanı görseli`} fill sizes="(max-width:700px) 100vw,(max-width:1100px) 50vw,33vw"/><span>Temsili Görsel</span></div>
        <div className="area-body"><small>{String(i+1).padStart(2,"0")}</small><h3>{a.title}</h3><p>{a.desc}</p><b>Detayları Gör <span>↗</span></b></div>
      </article>)}
    </div>
  </section>

  <section id="hizmetler" className="section dark-section">
    <div className="section-title inverse"><div><p className="eyebrow">HİZMETLERİMİZ</p><h2>Proje. Tasarım.<br/>Uygulama.</h2></div><p>Uzman ekiplerin aynı hedef doğrultusunda çalıştığı bütüncül bir süreç: karar, teknik detay, üretim ve saha birbirinden kopmadan ilerler.</p></div>
    <div className="service-grid">{services.map(s=><article key={s.n}><small>{s.n}</small><h3>{s.t}</h3><p>{s.d}</p></article>)}</div>
  </section>

  <section id="projeler" className="section projects">
    <div className="section-title"><div><p className="eyebrow dark">PROJELER</p><h2>Gerçek işler geldikçe<br/>burada yayınlayacağız.</h2></div><p>Bu bölüm portföy alanıdır. Temsili görselleri gerçek proje referansı gibi göstermiyoruz; gerçek uygulama fotoğrafları ve doğrulanabilir proje bilgileri geldiğinde kartlar aktif hale gelecek.</p></div>
    <div className="project-placeholders">
      {['Ticari Mekân','Düğün Salonu','Villa & Konut'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><p>Gerçek MEKVERA proje fotoğrafı eklenecek</p></div>)}
    </div>
  </section>

  <section id="surec" className="section process">
    <div className="process-intro"><p className="eyebrow">SÜRECİMİZ</p><h2>Kontrollü süreç.<br/>Net sorumluluk.</h2><p>Müşterinin farklı ekipleri ayrı ayrı koordine etmek zorunda kalmadığı, kararların kayıt altında ilerlediği proje yönetimi.</p></div>
    <div className="process-grid">{process.map((p,i)=><div key={p}><small>{String(i+1).padStart(2,"0")}</small><strong>{p}</strong></div>)}</div>
  </section>

  <section id="iletisim" className="cta">
    <div><p className="eyebrow">BİR PROJE BAŞLATIN</p><h2>Bir mekânınız var.<br/><em>Potansiyelini birlikte ortaya çıkaralım.</em></h2></div>
    <div><p>Proje türünü, yaklaşık metrekareyi ve hedefinizi paylaşın. İletişim bilgileri mevcut MEKVERA altyapısındaki gerçek bilgilerle bağlanmalıdır.</p><a className="btn gold" href="mailto:info@mekvera.com">Projenizi Anlatın <span>↗</span></a></div>
  </section>

  <footer><a className="brand footer-brand" href="#anasayfa"><strong>MEKVERA</strong><small>PROJE • TASARIM • UYGULAMA</small></a><p>Proje, tasarım ve uygulama süreçlerini tek bir bütün olarak yönetiyoruz.</p><div className="footer-links"><a href="#uygulamalar">Uygulamalar</a><a href="#hizmetler">Hizmetler</a><a href="#projeler">Projeler</a><a href="#surec">Süreç</a></div><small>© 2026 MEKVERA</small></footer>
 <a
  className="whatsapp-float"
  href="https://wa.me/905303339929?text=Merhaba%2C%20MEKVERA%27dan%20proje%20%2F%20tasar%C4%B1m%20%2F%20uygulama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="MEKVERA ile WhatsApp üzerinden iletişime geçin"
>
  <span className="whatsapp-icon" aria-hidden="true">
    <svg viewBox="0 0 32 32">
      <path d="M19.11 17.21c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.23 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z"/>
      <path d="M16.03 3.2c-7.04 0-12.77 5.73-12.77 12.77 0 2.25.59 4.45 1.71 6.39L3.15 29l6.79-1.78a12.72 12.72 0 0 0 6.09 1.55h.01c7.04 0 12.77-5.73 12.77-12.77 0-3.41-1.33-6.62-3.74-9.03A12.69 12.69 0 0 0 16.03 3.2Zm0 23.41h-.01a10.57 10.57 0 0 1-5.39-1.47l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.58 10.58 0 0 1-1.63-5.67c0-5.85 4.76-10.61 10.62-10.61 2.83 0 5.49 1.1 7.49 3.11a10.53 10.53 0 0 1 3.11 7.5c0 5.85-4.76 10.61-10.6 10.64Z"/>
    </svg>
  </span>

  <span className="whatsapp-label">
    WhatsApp'tan Yazın
  </span>
</a>
 </main>
}

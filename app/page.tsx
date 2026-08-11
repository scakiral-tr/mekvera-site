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
 </main>
}

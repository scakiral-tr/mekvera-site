import Link from 'next/link';

const services = [
  { no:'01', title:'Ofis', desc:'Çalışma kültürünü, verimliliği ve marka kimliğini destekleyen kurumsal ofis dönüşümleri.', href:'/hizmetler/ofis-tadilati-dekorasyon' },
  { no:'02', title:'Otel', desc:'Misafir deneyimini yükselten oda, lobi ve ortak alan renovasyonları.', href:'/hizmetler/otel-renovasyon' },
  { no:'03', title:'Mağaza', desc:'Markayı fiziksel mekânda güçlü biçimde anlatan satış alanları ve konsept uygulamaları.', href:'/hizmetler/magaza-dekorasyonu' },
  { no:'04', title:'Hastane & Klinik', desc:'İşlev, hijyen, dolaşım ve kullanıcı deneyimini birlikte ele alan sağlık mekânları.', href:'/hizmetler/hastane-klinik-dekorasyon' },
  { no:'05', title:'Düğün Salonu', desc:'Atmosfer, kapasite, sahne ve operasyonu birlikte çözen konsept tasarım ve uygulama.', href:'/hizmetler/dugun-salonu-dekorasyon' },
  { no:'06', title:'Villa & Konut', desc:'Kişiye özel yaşam alanları için iç mimari, özel imalat ve anahtar teslim uygulama.', href:'/hizmetler/villa-konut-dekorasyon' },
];

const process = [
  ['01','Keşif & İhtiyaç','Alanı, kullanıcıyı, hedefi ve teknik gereklilikleri birlikte tanımlarız.'],
  ['02','Konsept Tasarım','Mekânın kimliğini, malzeme dilini ve ana tasarım kararlarını oluştururuz.'],
  ['03','Teknik Proje','Uygulama detaylarını, ölçüleri, imalatları ve disiplin koordinasyonunu netleştiririz.'],
  ['04','Bütçe & Program','İş kalemlerini ve uygulama takvimini şeffaf biçimde planlarız.'],
  ['05','Üretim & Uygulama','Saha, özel imalat, satın alma ve montaj sürecini tek sorumluluk altında yönetiriz.'],
  ['06','Kontrol & Teslim','Kalite kontrollerini tamamlar, eksikleri kapatır ve projeyi teslim ederiz.'],
];

export default function Home(){
  return <>
    <section className="hero hero-v2">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-architecture" aria-hidden="true"><i/><i/><i/><i/></div>
      <div className="shell hero-v2-inner">
        <div className="hero-copy">
          <div className="eyebrow">PROJE • TASARIM • UYGULAMA</div>
          <h1>Mekânı<br/>yenilemiyoruz.<br/><span>Dönüştürüyoruz.</span></h1>
          <p>Ofis, otel, hastane, mağaza, düğün salonu, villa ve konut projelerinde; konsept tasarımdan anahtar teslim uygulamaya kadar tüm süreci tek ekip altında yönetiyoruz.</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href="/projeler">Projeleri İncele</Link>
            <Link className="btn btn-outline" href="/iletisim#proje-formu">Projenizi Konuşalım</Link>
          </div>
        </div>
        <div className="hero-proof">
          <span>MEKVERA YAKLAŞIMI</span>
          <strong>Tasarımın sahada<br/>doğru uygulanması.</strong>
          <p>Tek ekip. Net sorumluluk. Kontrollü süreç.</p>
        </div>
      </div>
      <div className="hero-scroll">AŞAĞI KAYDIR <span>↓</span></div>
    </section>

    <section className="principles">
      <div className="shell principle-grid">
        <div><b>01</b><strong>Tek Sorumlu Ekip</strong><span>Tasarım + proje + uygulama</span></div>
        <div><b>02</b><strong>Uygulanabilir Tasarım</strong><span>Estetik kadar teknik gerçeklik</span></div>
        <div><b>03</b><strong>Şeffaf Süreç</strong><span>İş kalemi + takvim + kontrol</span></div>
        <div><b>04</b><strong>Anahtar Teslim</strong><span>Fikirden son kontrole kadar</span></div>
      </div>
    </section>

    <section className="section light intro-section">
      <div className="shell split-intro">
        <div>
          <span className="eyebrow dark">MEKVERA</span>
          <h2>Tasarım ile uygulama arasındaki boşluğu kapatıyoruz.</h2>
        </div>
        <div className="intro-copy">
          <p>İyi bir mekân yalnızca güzel görünmez; doğru çalışır, doğru uygulanır ve yatırımın karşılığını verir. Bu nedenle tasarım kararlarını en başından bütçe, malzeme, teknik altyapı ve uygulama gerçekleriyle birlikte ele alıyoruz.</p>
          <Link className="arrow-link dark-link" href="/kurumsal">Yaklaşımımızı inceleyin <span>↗</span></Link>
        </div>
      </div>
    </section>

    <section className="section services-v2">
      <div className="shell">
        <div className="section-head premium-head">
          <div><span className="eyebrow">UZMANLIK ALANLARI</span><h2>Farklı mekânlar.<br/>Tek proje disiplini.</h2></div>
          <p>Her projeyi kullanım amacı, hedef kitle, operasyon, bütçe ve teslim takvimine göre yeniden kurguluyoruz.</p>
        </div>
        <div className="service-list-v2">
          {services.map(s => <Link href={s.href} className="service-row" key={s.title}>
            <span className="service-index">{s.no}</span><h3>{s.title}</h3><p>{s.desc}</p><b>↗</b>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="section projects-v2">
      <div className="shell">
        <div className="section-head premium-head project-head">
          <div><span className="eyebrow dark">SEÇİLMİŞ PROJELER</span><h2>Sonuç, tasarımın<br/>en güçlü kanıtıdır.</h2></div>
          <Link className="arrow-link dark-link" href="/projeler">Tüm projeler <span>↗</span></Link>
        </div>
        <div className="featured-projects">
          <article className="feature-project large-project"><div className="project-art office-art"><div className="art-label">GERÇEK PROJE FOTOĞRAFI EKLENECEK</div></div><div className="feature-meta"><div><span>OFİS</span><h3>Kurumsal Ofis Dönüşümü</h3></div><p>Konsept • Teknik Proje • Uygulama</p></div></article>
          <div className="project-stack">
            <article className="feature-project"><div className="project-art hotel-art"><div className="art-label">GERÇEK PROJE FOTOĞRAFI EKLENECEK</div></div><div className="feature-meta"><div><span>OTEL</span><h3>Otel Renovasyonu</h3></div><p>İç Mimari • Uygulama</p></div></article>
            <article className="feature-project"><div className="project-art villa-art"><div className="art-label">GERÇEK PROJE FOTOĞRAFI EKLENECEK</div></div><div className="feature-meta"><div><span>VİLLA</span><h3>Özel Yaşam Alanı</h3></div><p>Tasarım • Özel İmalat</p></div></article>
          </div>
        </div>
        <p className="project-note">* Bu alanlarda yalnızca gerçek MEKVERA projeleri ve doğrulanabilir proje bilgileri kullanılacaktır.</p>
      </div>
    </section>

    <section className="section process-v2">
      <div className="shell">
        <div className="process-title"><span className="eyebrow">SÜREÇ</span><h2>Kontrollü süreç.<br/>Net sorumluluk.</h2><p>Müşterinin farklı ekipleri koordine etmek zorunda kalmadığı, kararların kayıt altına alındığı bütüncül proje yönetimi.</p></div>
        <div className="process-list">{process.map(([n,t,d]) => <div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div>
    </section>

    <section className="manifesto">
      <div className="shell manifesto-inner">
        <span className="eyebrow">BİR PROJE BAŞLATIN</span>
        <h2>Bir mekânınız var.<br/><em>Birlikte potansiyelini ortaya çıkaralım.</em></h2>
        <p>Proje türünü, yaklaşık metrekareyi ve hedefinizi paylaşın. İlk görüşmede ihtiyacı ve doğru çalışma kapsamını birlikte netleştirelim.</p>
        <Link className="btn btn-gold" href="/iletisim#proje-formu">Projenizi Anlatın <span>↗</span></Link>
      </div>
    </section>
  </>
}

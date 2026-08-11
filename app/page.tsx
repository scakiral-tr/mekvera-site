import Link from 'next/link';

const services=[
 ['Ofis','Çalışma kültürünü destekleyen modern ve işlevsel ofisler.','ofis'],
 ['Otel','Misafir deneyimini yükselten yenileme ve iç mimari çözümleri.','otel'],
 ['Mağaza','Markayı fiziksel mekânda güçlü biçimde anlatan konseptler.','magaza'],
 ['Hastane','İşlev, hijyen ve kullanıcı deneyimini birlikte ele alan çözümler.','hastane'],
 ['Düğün Salonu','Atmosfer, kapasite ve operasyonu birlikte çözen konsept tasarım.','dugun-salonu'],
 ['Villa & Konut','Kişiye özel yaşam alanı tasarımı ve anahtar teslim uygulama.','villa']
];
const projects=[
 ['Kurumsal Ofis Dönüşümü','İstanbul','Tasarım • Proje • Uygulama'],
 ['Otel Renovasyonu','Marmara Bölgesi','Konsept • İç Mimari • Uygulama'],
 ['Modern Villa','İstanbul','İç Mimari • Özel İmalat • Uygulama']
];
export default function Home(){return <>
<section className="hero"><div className="hero-overlay"></div><div className="shell hero-content"><div className="eyebrow">MEKÂNLARI DÖNÜŞTÜRÜYORUZ</div><h1>TASARLIYORUZ.<br/>UYGULUYORUZ.<br/><span>DÖNÜŞTÜRÜYORUZ.</span></h1><p>Ofis, otel, hastane, mağaza, düğün salonu, villa ve yaşam alanlarında; konsept tasarımdan anahtar teslim uygulamaya kadar tüm süreci tek ekip altında yönetiyoruz.</p><div className="hero-actions"><Link className="btn btn-gold" href="/projeler">Projeleri İncele</Link><Link className="btn btn-outline" href="/iletisim#proje-formu">Projenizi Konuşalım</Link></div></div></section>
<section className="trust-strip"><div className="shell trust-grid"><div><strong>01</strong><span>Konsept Tasarım</span></div><div><strong>02</strong><span>Teknik Proje</span></div><div><strong>03</strong><span>Üretim & Uygulama</span></div><div><strong>04</strong><span>Anahtar Teslim</span></div></div></section>
<section className="section light"><div className="shell"><div className="section-head"><div><span className="eyebrow dark">HİZMETLERİMİZ</span><h2>Farklı mekânlar.<br/>Tek proje disiplini.</h2></div><p>Her projeyi kullanım amacı, hedef kitle, operasyon, bütçe ve teslim takvimine göre ele alıyoruz.</p></div><div className="service-grid">{services.map(([t,d,id],i)=><Link key={id} href={`/hizmetler#${id}`} className="service-card"><div className="service-no">0{i+1}</div><h3>{t}</h3><p>{d}</p><span>Detayları incele →</span></Link>)}</div></div></section>
<section className="section dark-section"><div className="shell"><div className="section-head"><div><span className="eyebrow">SEÇİLMİŞ PROJELER</span><h2>Fikrin çizimden<br/>gerçeğe dönüşümü.</h2></div><Link className="text-link" href="/projeler">Tüm projeler →</Link></div><div className="project-grid">{projects.map((p,i)=><article className={`project-card project-${i+1}`} key={p[0]}><div className="project-image"><span>PROJE GÖRSELİ</span></div><div className="project-meta"><div><h3>{p[0]}</h3><p>{p[1]}</p></div><span>{p[2]}</span></div></article>)}</div></div></section>
<section className="section process"><div className="shell"><span className="eyebrow dark">NASIL ÇALIŞIYORUZ?</span><h2>Kontrollü süreç. Net sorumluluk.</h2><div className="process-grid">{['Keşif & İhtiyaç','Konsept Tasarım','Teknik Proje','Bütçe & İş Programı','Üretim & Uygulama','Kalite Kontrol & Teslim'].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div></div></section>
<section className="cta"><div className="shell cta-inner"><div><span className="eyebrow">YENİ PROJENİZ Mİ VAR?</span><h2>Önce projenizi anlayalım.</h2><p>Alan, ihtiyaç ve hedeflerinizi paylaşın. İlk değerlendirmeyi birlikte yapalım.</p></div><Link className="btn btn-gold" href="/iletisim#proje-formu">Projenizi Anlatın</Link></div></section>
</>}

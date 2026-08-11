import Image from "next/image";
import AIProjectAssistant from "../components/AIProjectAssistant";

const whatsappUrl =
  "https://wa.me/905303339929?text=Merhaba%2C%20MEKVERA%27dan%20proje%20%2F%20tasar%C4%B1m%20%2F%20uygulama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const areas = [
  {
    title: "Ofis",
    image: "/images/ofis.webp",
    desc: "Verimlilik, konfor ve kurum kimliğini birlikte ele alan çalışma alanları.",
  },
  {
    title: "İş Yeri",
    image: "/images/is-yeri.webp",
    desc: "Kafe, restoran, showroom ve ticari işletmelerde işlevi, müşteri deneyimini ve marka dilini destekleyen mekânlar.",
  },
  {
    title: "Mağaza",
    image: "/images/magaza.webp",
    desc: "Markayı fiziksel mekânda güçlü biçimde anlatan, satış deneyimini destekleyen alanlar.",
  },
  {
    title: "Düğün Salonu",
    image: "/images/dugun-salonu.webp",
    desc: "Atmosfer, dolaşım, kapasite, sahne ve operasyonu birlikte çözen davet mekânları.",
  },
  {
    title: "Villa & Konut",
    image: "/images/villa-konut.webp",
    desc: "Yaşam biçimine göre kurgulanan, detaylı ve kişiye özel iç mekân çözümleri.",
  },
  {
    title: "Fuar Standı",
    image: "/images/fuar-standi.webp",
    desc: "Markayı fuar ortamında güçlü ve işlevsel biçimde temsil eden stand çözümleri.",
  },
];

const services = [
  {
    n: "01",
    t: "Proje",
    d: "İhtiyaç analizi, keşif, ölçülendirme, teknik çözüm ve uygulanabilir proje altyapısını oluşturuyoruz.",
  },
  {
    n: "02",
    t: "Tasarım",
    d: "İşlev, estetik, malzeme, marka kimliği ve kullanıcı deneyimini tek tasarım bütününde kurguluyoruz.",
  },
  {
    n: "03",
    t: "Uygulama",
    d: "Üretim, satın alma, saha koordinasyonu, montaj ve kalite kontrol süreçlerini tek sorumluluk altında yönetiyoruz.",
  },
];

const process = [
  ["01", "Keşif & ihtiyaç analizi", "Alanı, kullanıcıyı, hedefi ve teknik gereklilikleri birlikte tanımlarız."],
  ["02", "Konsept tasarım", "Mekânın kimliğini, malzeme dilini ve ana tasarım kararlarını oluştururuz."],
  ["03", "Teknik proje", "Ölçü, detay, imalat ve disiplin koordinasyonunu uygulamaya hazır hale getiririz."],
  ["04", "Bütçe & program", "İş kalemlerini, öncelikleri ve uygulama takvimini netleştiririz."],
  ["05", "Üretim & uygulama", "Satın alma, özel imalat, saha ve montaj süreçlerini koordine ederiz."],
  ["06", "Kontrol & teslim", "Kalite kontrollerini tamamlar, eksikleri kapatır ve projeyi teslim ederiz."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#anasayfa" aria-label="MEKVERA ana sayfa">
          <strong>MEKVERA</strong>
          <small>PROJE • TASARIM • UYGULAMA</small>
        </a>

        <nav className="desktop-nav" aria-label="Ana menü">
          <a href="#anasayfa">Ana Sayfa</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#uygulamalar">Uygulamalar</a>
          <a href="#hizmetler">Hizmetlerimiz</a>
          <a href="#surec">Süreç</a>
          <a href="#proje-asistani">AI Ön Proje</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <a className="top-cta" href="#proje-asistani">
          Projenizi Anlatın <span>↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Menüyü aç">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobil menü">
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#uygulamalar">Uygulamalar</a>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <a href="#surec">Süreç</a>
            <a href="#proje-asistani">AI Ön Proje</a>
            <a href="#iletisim">İletişim</a>
          </nav>
        </details>
      </header>

      <section id="anasayfa" className="hero">
        <Image
          src="/images/hero-reception.webp"
          alt="Modern karşılama alanı konsept görseli"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">PROJE • TASARIM • UYGULAMA</p>
          <h1>
            FİKİRDEN
            <br />
            <span>GERÇEĞE</span>
          </h1>
          <p className="hero-copy">
            Mekânlarınızı; tasarım gücü, teknik bilgi birikimi ve uygulama kabiliyetiyle fikirden
            anahtar teslim sonuca taşıyoruz.
          </p>
          <div className="hero-actions">
            <a className="btn gold" href="#proje-asistani">
              Projenizi Anlatın <span>→</span>
            </a>
            <a className="btn ghost" href="#uygulamalar">
              Uygulama Alanları
            </a>
          </div>
        </div>
        <div className="hero-note">
          <b>Tek ekip.</b>
          <span>Net sorumluluk.</span>
          <span>Kontrollü uygulama.</span>
        </div>
      </section>

      <section id="hakkimizda" className="section about">
        <div className="section-title about-title">
          <div>
            <p className="eyebrow">HAKKIMIZDA</p>
            <h2>
              Tasarım ile uygulama
              <br />
              arasındaki boşluğu kapatıyoruz.
            </h2>
          </div>
          <div>
            <p>
              MEKVERA; proje, tasarım ve uygulama süreçlerini tek bir bütün olarak yönetir. Mimar,
              iç mimar, mühendis, üretim ve saha ekiplerinin aynı hedef doğrultusunda çalıştığı
              yapımızla, tasarım kararlarının sahada doğru uygulanmasını amaçlarız.
            </p>
            <p>
              Yaklaşımımız yalnızca iyi görünen mekânlar üretmek değil; bütçesi, teknik detayı,
              malzemesi ve uygulama programı birlikte düşünülmüş, sürdürülebilir çözümler ortaya
              koymaktır.
            </p>
          </div>
        </div>

        <div className="about-values">
          <div>
            <span>01</span>
            <strong>Tek noktadan yönetim</strong>
            <p>Proje, tasarım, üretim ve uygulama aynı koordinasyon sistemi içinde ilerler.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Uygulanabilir tasarım</strong>
            <p>Estetik kararları teknik gerçeklik, malzeme ve bütçeyle birlikte ele alırız.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Net sorumluluk</strong>
            <p>Müşterinin farklı ekipleri ayrı ayrı koordine etmek zorunda kalmadığı bir yapı kurarız.</p>
          </div>
        </div>
      </section>

      <section id="uygulamalar" className="section light">
        <div className="section-title">
          <div>
            <p className="eyebrow dark">UYGULAMA ALANLARIMIZ</p>
            <h2>
              Farklı mekânlar.
              <br />
              Tek proje disiplini.
            </h2>
          </div>
          <p>
            Ofis, iş yeri, mağaza, düğün salonu, villa ve fuar standlarında; projeden tasarıma,
            üretimden uygulamaya kadar bütüncül çözümler sunuyoruz.
          </p>
        </div>

        <div className="area-grid">
          {areas.map((area, index) => (
            <article className="area-card" key={area.title}>
              <div className="area-image">
                <Image
                  src={area.image}
                  alt={`${area.title} kategori görseli`}
                  fill
                  sizes="(max-width:700px) 100vw,(max-width:1100px) 50vw,33vw"
                />
                <span>Kategori Görseli</span>
              </div>
              <div className="area-body">
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
                <a href="#proje-asistani">
                  AI Ön Proje Oluştur <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="hizmetler" className="section dark-section">
        <div className="section-title inverse">
          <div>
            <p className="eyebrow">HİZMETLERİMİZ</p>
            <h2>
              Proje. Tasarım.
              <br />
              Uygulama.
            </h2>
          </div>
          <p>
            Uzman ekiplerin aynı hedef doğrultusunda çalıştığı bütüncül bir süreç: karar, teknik
            detay, üretim ve saha birbirinden kopmadan ilerler.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.n}>
              <small>{service.n}</small>
              <h3>{service.t}</h3>
              <p>{service.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="surec" className="section process">
        <div className="process-intro">
          <p className="eyebrow">SÜRECİMİZ</p>
          <h2>
            Kontrollü süreç.
            <br />
            Net sorumluluk.
          </h2>
          <p>
            Müşterinin farklı ekipleri ayrı ayrı koordine etmek zorunda kalmadığı, kararların kayıt
            altında ilerlediği proje yönetimi.
          </p>
        </div>

        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <div key={number}>
              <small>{number}</small>
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AIProjectAssistant />

      <section id="iletisim" className="cta">
        <div>
          <p className="eyebrow">BİR PROJE BAŞLATIN</p>
          <h2>
            Bir mekânınız var.
            <br />
            <em>Potansiyelini birlikte ortaya çıkaralım.</em>
          </h2>
        </div>

        <div className="cta-content">
          <p>
            AI Ön Proje Asistanı ile ilk briefinizi oluşturabilir veya doğrudan ekibimize ulaşabilirsiniz.
            Kesin kapsam, keşif ve teknik değerlendirme sonrasında MEKVERA ekibiyle netleşir.
          </p>
          <div className="cta-actions">
            <a className="btn gold" href="#proje-asistani">
              AI Ön Proje Oluştur <span>↗</span>
            </a>
            <a className="btn ghost" href="mailto:info@mekvera.com?subject=MEKVERA%20Proje%20Talebi">
              E-posta ile Anlatın <span>↗</span>
            </a>
            <a className="btn whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp&apos;tan Yazın <span>↗</span>
            </a>
          </div>
          <div className="contact-mini">
            <a href="tel:+905303339929">+90 530 333 99 29</a>
            <a href="mailto:info@mekvera.com">info@mekvera.com</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#anasayfa">
            <strong>MEKVERA</strong>
            <small>PROJE • TASARIM • UYGULAMA</small>
          </a>
          <p>Proje, tasarım ve uygulama süreçlerini tek bir bütün olarak yönetiyoruz.</p>
        </div>

        <div className="footer-column">
          <b>Hızlı Erişim</b>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#uygulamalar">Uygulamalar</a>
          <a href="#hizmetler">Hizmetlerimiz</a>
          <a href="#surec">Süreç</a>
          <a href="#proje-asistani">AI Ön Proje</a>
        </div>

        <div className="footer-column">
          <b>İletişim</b>
          <a href="tel:+905303339929">+90 530 333 99 29</a>
          <a href="mailto:info@mekvera.com">info@mekvera.com</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>

        <div className="footer-end">
          <a className="btn footer-cta" href="#proje-asistani">
            Projenizi Anlatın <span>↗</span>
          </a>
          <small>© 2026 MEKVERA. Tüm hakları saklıdır.</small>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MEKVERA ile WhatsApp üzerinden iletişime geçin"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <path d="M19.11 17.21c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.23 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z" />
            <path d="M16.03 3.2c-7.04 0-12.77 5.73-12.77 12.77 0 2.25.59 4.45 1.71 6.39L3.15 29l6.79-1.78a12.72 12.72 0 0 0 6.09 1.55h.01c7.04 0 12.77-5.73 12.77-12.77 0-3.41-1.33-6.62-3.74-9.03A12.69 12.69 0 0 0 16.03 3.2Zm0 23.41h-.01a10.57 10.57 0 0 1-5.39-1.47l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.58 10.58 0 0 1-1.63-5.67c0-5.85 4.76-10.61 10.62-10.61 2.83 0 5.49 1.1 7.49 3.11a10.53 10.53 0 0 1 3.11 7.5c0 5.85-4.76 10.61-10.6 10.64Z" />
          </svg>
        </span>
        <span className="whatsapp-label">WhatsApp&apos;tan Yazın</span>
      </a>
    </main>
  );
}

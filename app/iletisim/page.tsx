import type { Metadata } from 'next';
import { ProjectForm } from '../../components/ProjectForm';

export const metadata: Metadata = {
  title:'İletişim ve Proje Talebi',
  description:'MEKVERA ile ofis, otel, hastane, mağaza, düğün salonu, villa ve konut projenizi görüşün.'
};

export default function Page(){
  return <>
    <section className="page-hero contact-hero"><div className="shell"><span className="eyebrow">İLETİŞİM</span><h1>Projenizi<br/><em>birlikte değerlendirelim.</em></h1><p>Mekânınızı, ihtiyacınızı ve hedefinizi paylaşın. Tasarım, proje ve uygulama kapsamını ilk görüşmede birlikte netleştirelim.</p></div></section>
    <section className="section" id="proje-formu"><div className="shell contact-v4">
      <aside className="contact-aside">
        <span className="eyebrow">ÖN GÖRÜŞME</span><h2>İlk adım,<br/>ihtiyacı doğru anlamak.</h2><p>Proje türü, yaklaşık alan ve mevcut durum bilgileri ilk değerlendirmeyi hızlandırır. Formu göndermek istemezseniz doğrudan telefon veya WhatsApp üzerinden de ulaşabilirsiniz.</p>
        <div className="direct-contact"><a href="tel:+905303339929"><small>ANA PROJE HATTI</small><strong>0530 333 99 29</strong></a><a href="tel:+905302471414"><small>ALTERNATİF HAT</small><strong>0530 247 14 14</strong></a><a href="mailto:info@mekvera.com"><small>E-POSTA</small><strong>info@mekvera.com</strong></a><a className="whatsapp-contact" href="https://wa.me/905303339929?text=Merhaba%20MEKVERA%2C%20bir%20proje%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum." target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>Mesaj gönder ↗</strong></a></div>
      </aside>
      <div className="contact-form-card"><div className="form-kicker">PROJENİZİ ANLATIN</div><h2>Proje ön değerlendirme formu</h2><ProjectForm/></div>
    </div></section>
  </>
}

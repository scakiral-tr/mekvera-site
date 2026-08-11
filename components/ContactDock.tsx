export function ContactDock(){
  const whatsapp = 'https://wa.me/905303339929?text=Merhaba%20MEKVERA%2C%20bir%20proje%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum.';
  return <div className="contact-dock" aria-label="Hızlı iletişim">
    <a href="tel:+905303339929" aria-label="MEKVERA'yı ara">Ara</a>
    <a className="contact-dock-primary" href={whatsapp} target="_blank" rel="noreferrer" aria-label="MEKVERA WhatsApp">WhatsApp</a>
  </div>
}

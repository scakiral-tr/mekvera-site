import Link from 'next/link';
import { Logo } from './Logo';
export function Header(){return <header className="site-header"><div className="shell header-inner"><Link href="/" className="logo-link"><Logo /></Link><nav aria-label="Ana menü"><Link href="/kurumsal">Kurumsal</Link><Link href="/hizmetler">Hizmetler</Link><Link href="/projeler">Projeler</Link><Link href="/blog">Blog</Link><Link href="/iletisim">İletişim</Link></nav><Link className="btn btn-gold header-cta" href="/iletisim#proje-formu">Projenizi Konuşalım</Link></div></header>}

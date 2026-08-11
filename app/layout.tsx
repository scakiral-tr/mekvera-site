import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactDock } from '../components/ContactDock';

export const metadata: Metadata = {
  metadataBase: new URL('https://mekvera.com'),
  title: { default: 'MEKVERA | Proje, Tasarım ve Anahtar Teslim Uygulama', template: '%s | MEKVERA' },
  description: 'Ofis, otel, hastane, mağaza, düğün salonu, villa ve konut projelerinde konsept tasarım, renovasyon ve anahtar teslim uygulama.',
  alternates:{canonical:'https://mekvera.com'},
  openGraph: { title: 'MEKVERA', description: 'Proje • Tasarım • Uygulama', type: 'website', locale: 'tr_TR', url:'https://mekvera.com' },
  twitter:{card:'summary_large_image',title:'MEKVERA',description:'Proje • Tasarım • Uygulama'}
};

const organizationSchema = {
  '@context':'https://schema.org',
  '@type':'Organization',
  name:'MEKVERA',
  url:'https://mekvera.com',
  email:'info@mekvera.com',
  telephone:'+90 530 333 99 29',
  description:'Ofis, otel, hastane, mağaza, düğün salonu, villa ve konut projelerinde proje, tasarım ve anahtar teslim uygulama hizmetleri.',
  areaServed:'TR'
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/><Header/><main>{children}</main><Footer/><ContactDock/></body></html>}

import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mekvera.com'),
  title: { default: 'MEKVERA | Mimarlık, Tasarım ve Anahtar Teslim Uygulama', template: '%s | MEKVERA' },
  description: 'Ofis, otel, hastane, mağaza, düğün salonu, villa ve konut projelerinde konsept tasarım, renovasyon ve anahtar teslim uygulama.',
  openGraph: { title: 'MEKVERA', description: 'Tasarlıyoruz. Uyguluyoruz. Dönüştürüyoruz.', type: 'website', locale: 'tr_TR' }
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body><Header/><main>{children}</main><Footer/></body></html>}

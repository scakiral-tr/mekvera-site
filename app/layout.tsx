import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mekvera.com"),
  title: {
    default: "MEKVERA | Proje • Tasarım • Uygulama",
    template: "%s | MEKVERA",
  },
  description:
    "MEKVERA; ofis, iş yeri, mağaza, düğün salonu, villa, konut ve fuar standı projelerinde proje, tasarım ve uygulama süreçlerini tek çatı altında yönetir.",
  keywords: [
    "MEKVERA",
    "proje tasarım uygulama",
    "anahtar teslim uygulama",
    "iş yeri tasarım uygulama",
    "mağaza tasarım uygulama",
    "düğün salonu tasarım uygulama",
    "villa dekorasyon uygulama",
    "fuar standı tasarım uygulama",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "MEKVERA",
    title: "MEKVERA | Proje • Tasarım • Uygulama",
    description:
      "Fikirden teknik projeye, üretimden anahtar teslim uygulamaya kadar bütüncül mekân çözümleri.",
    images: [
      {
        url: "/images/hero-reception.webp",
        width: 1600,
        height: 1000,
        alt: "MEKVERA Proje • Tasarım • Uygulama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEKVERA | Proje • Tasarım • Uygulama",
    description:
      "Fikirden teknik projeye, üretimden anahtar teslim uygulamaya kadar bütüncül mekân çözümleri.",
    images: ["/images/hero-reception.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

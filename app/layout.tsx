import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEKVERA | Proje • Tasarım • Uygulama",
  description: "MEKVERA; ofis, iş yeri, mağaza, düğün salonu, villa, konut ve fuar standı projelerinde proje, tasarım ve uygulama süreçlerini bütüncül olarak yönetir.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}

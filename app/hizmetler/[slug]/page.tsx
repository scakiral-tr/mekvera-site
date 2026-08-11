import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const serviceData = {
  'ofis-tadilati-dekorasyon': { title:'Ofis Tadilatı ve Dekorasyonu', eyebrow:'OFİS', desc:'Kurumsal kimliği, çalışan deneyimini ve iş akışını birlikte ele alan ofis renovasyonu; konsept tasarımdan anahtar teslim uygulamaya.', focus:['İhtiyaç ve yerleşim analizi','Konsept ve malzeme tasarımı','Elektrik, data ve aydınlatma koordinasyonu','Özel mobilya ve sabit imalatlar','Saha uygulaması ve teslim'] },
  'otel-renovasyon': { title:'Otel Renovasyonu ve İç Mimari', eyebrow:'OTEL', desc:'Oda, lobi ve ortak alanlarda misafir deneyimini, operasyonu ve marka dilini birlikte geliştiren renovasyon çözümleri.', focus:['Konsept ve misafir deneyimi','Oda ve ortak alan tasarımı','Malzeme ve FF&E koordinasyonu','Operasyona uygun etaplama','Anahtar teslim uygulama'] },
  'magaza-dekorasyonu': { title:'Mağaza ve Dükkan Dekorasyonu', eyebrow:'MAĞAZA', desc:'Marka kimliğini mekâna taşıyan, müşteri akışını ve ürün sunumunu destekleyen perakende tasarım ve uygulama hizmetleri.', focus:['Marka ve konsept analizi','Müşteri akışı ve vitrin','Aydınlatma ve teşhir tasarımı','Özel imalat','Hızlı saha uygulaması'] },
  'hastane-klinik-dekorasyon': { title:'Hastane ve Klinik Dekorasyonu', eyebrow:'SAĞLIK', desc:'Hijyen, dolaşım, teknik gereklilik ve kullanıcı konforunu birlikte ele alan sağlık mekânı tasarım ve uygulamaları.', focus:['Fonksiyon ve dolaşım analizi','Hijyen ve malzeme kararları','Teknik disiplin koordinasyonu','Hasta ve personel deneyimi','Uygulama ve kalite kontrol'] },
  'dugun-salonu-dekorasyon': { title:'Düğün Salonu Konsept Tasarım ve Uygulama', eyebrow:'DAVET', desc:'Sahne, tavan, ışık, masa düzeni, kapasite ve servis operasyonunu tek konsept içinde birleştiren dönüşüm projeleri.', focus:['Konsept ve atmosfer','Sahne ve odak noktaları','Tavan ve dekoratif aydınlatma','Kapasite ve dolaşım','Uygulama ve özel imalat'] },
  'villa-konut-dekorasyon': { title:'Villa ve Konut İç Mimari Uygulama', eyebrow:'YAŞAM', desc:'Kullanıcı alışkanlıklarına göre tasarlanan, malzeme seçiminden özel mobilyaya kadar bütüncül yaşam alanı projeleri.', focus:['Yaşam senaryosu ve planlama','İç mimari konsept','Mutfak ve sabit mobilyalar','Malzeme ve aydınlatma','Anahtar teslim uygulama'] },
} as const;

type Slug = keyof typeof serviceData;
export function generateStaticParams(){ return Object.keys(serviceData).map(slug => ({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const s=serviceData[slug as Slug]; if(!s) return {}; return {title:s.title,description:s.desc}; }
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const s=serviceData[slug as Slug]; if(!s) notFound(); return <>
  <section className="page-hero service-detail-hero"><div className="shell"><span className="eyebrow">{s.eyebrow}</span><h1>{s.title}</h1><p>{s.desc}</p><Link className="btn btn-gold" href="/iletisim#proje-formu">Projenizi Konuşalım</Link></div></section>
  <section className="content-section"><div className="shell service-detail-grid"><div><span className="eyebrow dark">KAPSAM</span><h2>Tasarım kararlarını uygulama gerçekleriyle birlikte ele alıyoruz.</h2><p>Her işin kapsamı mevcut yapıya, metrekareye, hedef programa ve teknik gerekliliklere göre ayrıca belirlenir. Bu sayfadaki kapsam genel yaklaşımımızı gösterir.</p></div><div className="focus-list">{s.focus.map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div></section>
  <section className="manifesto compact-manifesto"><div className="shell manifesto-inner"><span className="eyebrow">PROJENİZİ DEĞERLENDİRELİM</span><h2>Alanınızı ve hedefinizi anlatın.</h2><Link className="btn btn-gold" href="/iletisim#proje-formu">Ön Görüşme Başlatın</Link></div></section>
</> }

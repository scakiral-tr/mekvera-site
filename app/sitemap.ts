import type { MetadataRoute } from 'next';
const base='https://mekvera.com';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages=['','/kurumsal','/hizmetler','/projeler','/blog','/iletisim','/hizmetler/ofis-tadilati-dekorasyon','/hizmetler/otel-renovasyon','/hizmetler/magaza-dekorasyonu','/hizmetler/hastane-klinik-dekorasyon','/hizmetler/dugun-salonu-dekorasyon','/hizmetler/villa-konut-dekorasyon'];
  return pages.map((path,i)=>({url:base+path,lastModified:new Date(),changeFrequency:i===0?'weekly':'monthly',priority:i===0?1:path.startsWith('/hizmetler/') ? .9 : .7})) as MetadataRoute.Sitemap;
}

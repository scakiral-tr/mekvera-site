import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base='https://www.mekvera.com';
  const routes=['','/kurumsal','/hizmetler','/projeler','/blog','/iletisim','/hizmetler/ofis-tadilati-dekorasyon','/hizmetler/otel-renovasyon','/hizmetler/magaza-dekorasyonu','/hizmetler/hastane-klinik-dekorasyon','/hizmetler/dugun-salonu-dekorasyon','/hizmetler/villa-konut-dekorasyon'];
  return routes.map((route,i)=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:i===0?'weekly':'monthly',priority:i===0 ? 1 : route.startsWith('/hizmetler/') ? .9 : .7}));
}

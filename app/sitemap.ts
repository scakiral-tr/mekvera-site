import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://www.mekvera.com'; return ['','/kurumsal','/hizmetler','/projeler','/blog','/iletisim'].map((p,i)=>({url:base+p,lastModified:new Date(),changeFrequency:i===0?'weekly':'monthly',priority:i===0?1:0.8})); }

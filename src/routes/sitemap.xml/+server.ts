import { posts } from '$lib/data/posts';
import type { RequestHandler } from './$types';

export const prerender = true;

const SITE = 'https://mustafayilmaz.art';

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/egitimler', priority: '0.95', changefreq: 'monthly' },
  { path: '/ai-danismanligi', priority: '0.9', changefreq: 'monthly' },
  { path: '/yazilimlar', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/sss', priority: '0.7', changefreq: 'monthly' },
  { path: '/art', priority: '0.6', changefreq: 'monthly' },
  { path: '/gizlilik', priority: '0.3', changefreq: 'yearly' }
];

export const GET: RequestHandler = async () => {
  const urls: string[] = [];

  // Statik route'lar
  for (const r of staticRoutes) {
    urls.push(`<url>
    <loc>${SITE}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`);
  }

  // Blog yazıları
  for (const p of posts) {
    urls.push(`<url>
    <loc>${SITE}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n  ')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const env = loadEnv(mode, rootDir, '');

const rawSiteUrl = env.VITE_SITE_URL || 'https://layout.mak5er.com';
const siteUrl = rawSiteUrl.replace(/\/+$/, '');

const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

await mkdir(publicDir, { recursive: true });
await writeFile(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
await writeFile(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`Synced site files for ${siteUrl}`);

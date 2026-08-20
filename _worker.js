// Cloudflare Pages Deployment Trigger 2026-08-20T15:27:00
const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://adlimutalaa.com/</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/kurumsal</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/uzmanliklar</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/iletisim</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haberler</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/surec</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/egitimler</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/vaka-analizleri</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-kvkk-sadakat-kart-dogrulama</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-maltepe-elektrikli-arac-yangini</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-bergama-ruzgar-turbini-yangini</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-google-sheets-github-siber-casusluk</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-gunra-fidye-yazilimi-tehdidi</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-turkiye-offshore-res</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://adlimutalaa.com/sitemap.xml
`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/sitemap.xml") {
      return new Response(SITEMAP_XML, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*",
          "X-Content-Type-Options": "nosniff"
        }
      });
    }

    if (url.pathname === "/robots.txt") {
      return new Response(ROBOTS_TXT, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*",
          "X-Content-Type-Options": "nosniff"
        }
      });
    }

    return env.ASSETS ? env.ASSETS.fetch(request) : fetch(request);
  }
};

// Cloudflare Pages Worker with Strict KV Rate Limiting & Admin Auth (Fail-Closed)
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
    <lastmod>2026-08-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-yargitay-sosyal-medya-aleniyet-yeniden-paylasim</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-lityum-batarya-sp188-konteyner-riski</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-ingiltere-enerji-tesisi-ot-siber-saldiri</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-turkiye-18-ilde-siber-suc-operasyonu</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-samsun-tekkekoy-kumanda-odasi-patlamasi</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-atlanta-dallas-lityum-batarya-yangini</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-ingiltere-enerji-tesisi-siber-saldiri</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-kvkk-fidye-yazilimi-tedarikci-erisim-zinciri</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-us-bank-dorduncu-taraf-siber-riski</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-cayirhan-maden-kazasi</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://adlimutalaa.com/haber-mardin-trafo-kazasi</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
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
    <loc>https://adlimutalaa.com/haber-kvkk-sadakat-kart-dogrulama</loc>
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

function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(";").forEach(cookie => {
    const parts = cookie.split("=");
    if (parts.length >= 2) {
      list[parts.shift().trim()] = decodeURIComponent(parts.join("=").trim());
    }
  });
  return list;
}

async function derivePbkdf2Hash(password, salt) {
  const enc = new TextEncoder();
  const passwordBytes = enc.encode(password);
  const saltBytes = enc.encode(salt);

  const baseKey = await crypto.subtle.importKey(
    "raw",
    passwordBytes,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: saltBytes,
      iterations: 100000,
      hash: "SHA-256"
    },
    baseKey,
    256
  );

  const hashArray = Array.from(new Uint8Array(derivedBits));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function hmacSign(message, secret) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// Server-Controlled Rate Limiting State via Cloudflare KV
async function getIpRateLimitState(ip, kv) {
  try {
    const data = await kv.get(`rl:${ip}`, "json");
    if (data && typeof data === "object") {
      if (Date.now() > data.resetAt) return { count: 0, resetAt: 0 };
      return { count: data.count || 0, resetAt: data.resetAt || 0 };
    }
  } catch (e) {
    console.error("KV rate limit read error:", e);
  }
  return { count: 0, resetAt: 0 };
}

async function setIpRateLimitState(ip, count, resetAt, kv) {
  const state = { count, resetAt };
  try {
    await kv.put(`rl:${ip}`, JSON.stringify(state), { expirationTtl: 300 });
  } catch (e) {
    console.error("KV rate limit write error:", e);
  }
}

async function clearIpRateLimitState(ip, kv) {
  try {
    await kv.delete(`rl:${ip}`);
  } catch (e) {}
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Static Sitemap & Robots.txt
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

    // 2. Admin Authentication API Endpoints
    if (url.pathname === "/api/admin/login" && request.method === "POST") {
      const targetHash = env && env.ADMIN_PASSWORD_HASH;
      const targetSalt = env && env.ADMIN_PASSWORD_SALT;
      const sessionSecret = env && env.SESSION_SECRET;

      // Safe Server Error if Secrets Missing (Fail-Closed)
      if (!targetHash || !targetSalt || !sessionSecret) {
        return new Response(JSON.stringify({
          success: false,
          error: "Sunucu güvenlik yapılandırması (Cloudflare Secrets) eksik. Lütfen Cloudflare Dashboard -> Settings -> Environment Variables bölümünden ADMIN_PASSWORD_HASH, ADMIN_PASSWORD_SALT ve SESSION_SECRET tanımlayınız."
        }), {
          status: 500,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
      }

      // Strict KV Binding Check (Fail-Closed Policy)
      const kv = env && (env.ADMIN_KV || env.RATE_LIMIT_KV || env.KV);
      if (!kv) {
        return new Response(JSON.stringify({
          success: false,
          error: "Sunucu altyapı yapılandırması (Rate Limit KV Binding) eksik. Lütfen Cloudflare Dashboard -> Settings -> Functions -> KV Namespace Bindings bölümünden ADMIN_KV binding'ini tanımlayınız."
        }), {
          status: 500,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
      }

      // Server-Side Controlled IP Rate Limiting via KV
      const clientIp = request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For") || "127.0.0.1";
      const rlState = await getIpRateLimitState(clientIp, kv);

      if (rlState.count >= 5 && Date.now() < rlState.resetAt) {
        return new Response(JSON.stringify({
          success: false,
          error: "Çok fazla hatalı deneme yapıldı. Güvenlik nedeniyle 5 dakika erişim engellendi."
        }), {
          status: 429,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
      }

      let body;
      try {
        body = await request.json();
      } catch (e) {
        return new Response(JSON.stringify({ success: false, error: "Geçersiz istek formatı." }), {
          status: 400,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
      }

      const inputPassword = body && body.password ? String(body.password) : "";
      const derivedHash = await derivePbkdf2Hash(inputPassword, targetSalt);

      if (derivedHash !== targetHash) {
        const newCount = rlState.count + 1;
        const resetAt = rlState.resetAt || (Date.now() + 300000); // 5 min lockout window
        await setIpRateLimitState(clientIp, newCount, resetAt, kv);

        return new Response(JSON.stringify({
          success: false,
          error: newCount >= 5 ? "Çok fazla hatalı deneme yapıldı. Güvenlik nedeniyle 5 dakika erişim engellendi." : "Parola hatalı."
        }), {
          status: newCount >= 5 ? 429 : 401,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
      }

      // Successful Login -> Clear IP Rate Limiter & Return Session Cookie
      await clearIpRateLimitState(clientIp, kv);

      const exp = Date.now() + (8 * 3600 * 1000); // 8 Hours Expiration
      const payload = `exp:${exp}`;
      const sig = await hmacSign(payload, sessionSecret);
      const sessionToken = `${payload}.${sig}`;

      const sessionCookie = `admin_session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`;

      return new Response(JSON.stringify({ success: true, message: "Giriş başarılı." }), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Set-Cookie": sessionCookie
        }
      });
    }

    if (url.pathname === "/api/admin/session" && request.method === "GET") {
      const sessionSecret = env && env.SESSION_SECRET;
      if (!sessionSecret) {
        return new Response(JSON.stringify({ loggedIn: false }), {
          status: 200,
          headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
        });
      }

      const cookies = parseCookies(request.headers.get("Cookie"));
      const token = cookies.admin_session;

      let isValid = false;
      if (token && token.includes(".")) {
        const [payload, sig] = token.split(".");
        const expectedSig = await hmacSign(payload, sessionSecret);
        if (sig === expectedSig) {
          const expStr = payload.replace("exp:", "");
          const exp = parseInt(expStr, 10);
          if (!isNaN(exp) && exp > Date.now()) {
            isValid = true;
          }
        }
      }

      return new Response(JSON.stringify({ loggedIn: isValid }), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store"
        }
      });
    }

    if (url.pathname === "/api/admin/logout" && request.method === "POST") {
      const expiredCookie = `admin_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Set-Cookie": expiredCookie
        }
      });
    }

    // Default static assets handling & extensionless HTML route resolution
    if (env && env.ASSETS) {
      const pathname = url.pathname;

      // Resolve extensionless paths (e.g., /haber-turkiye-18-ilde-siber-suc-operasyonu -> /haber-turkiye-18-ilde-siber-suc-operasyonu.html)
      if (!pathname.includes('.') && !pathname.endsWith('/') && !pathname.startsWith('/api/')) {
        const htmlUrl = new URL(request.url);
        htmlUrl.pathname = `${pathname}.html`;
        const htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl.toString(), request));
        if (htmlResponse.status === 200) {
          const contentType = htmlResponse.headers.get("Content-Type") || "";
          if (contentType.includes("text/html") && !contentType.includes("charset")) {
            const newHeaders = new Headers(htmlResponse.headers);
            newHeaders.set("Content-Type", "text/html; charset=utf-8");
            return new Response(htmlResponse.body, { status: 200, statusText: htmlResponse.statusText, headers: newHeaders });
          }
          return htmlResponse;
        }
      }

      const response = await env.ASSETS.fetch(request);
      const contentType = response.headers.get("Content-Type") || "";
      if (contentType.includes("text/html") && !contentType.includes("charset")) {
        const newHeaders = new Headers(response.headers);
        newHeaders.set("Content-Type", "text/html; charset=utf-8");
        return new Response(response.body, { status: response.status, statusText: response.statusText, headers: newHeaders });
      }
      return response;
    }

    return fetch(request);
  }
};

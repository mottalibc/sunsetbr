// src/app/sitemap.xml/route.js
export async function GET() {
  const baseUrl = "https://sunsetbeachresort.info"; // Change this to your domain or vercel app URL

  const pages = [
    "", // Home page
    "/about",
    "/contact",
    "/menu",
    "/gallery",
    "/rooms",
    // Add more paths as needed
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

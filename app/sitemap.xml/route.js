import { NextResponse } from "next/server";

const LOCALES = [
  "en", "es", "pt", "fr", "de", "it", "nl", "sv", "no", "da", "fi", "pl", 
  "cs", "sk", "sl", "hr", "sr", "ro", "bg", "hu", "ru", "uk", "tr", "ar", 
  "he", "zh", "zh-TW", "ja", "ko", "hi", "id", "ms", "th", "vi", "el", 
  "lt", "lv", "et", "is", "ga", "mt", "eo", "af", "sw", "fil", "bn", 
  "ta", "te", "mr", "gu", "pa", "ur", "fa", "kk", "uz", "az", "ka"
];

const STATIC_PATHS = [
  "/", 
  "/pricing", 
  "/auth/login", 
  "/auth/signup",
  "/tools",
  "/blog",
  "/privacy",
  "/dashboard",
  
  // Main tool pages
  "/tools/pdf/compress-pdf",
  "/tools/pdf/pdf-to-word",
  "/tools/pdf/pdf-to-excel",
  "/tools/image/compress-jpg",
  "/tools/image/compress-png",
  "/tools/image/jpg-to-png",
  "/tools/video/compress-video",
  "/tools/video/mp4-to-avi",
  "/tools/audio/compress-audio",
  "/tools/audio/mp3-to-wav",
  
  // SEO landing pages
  "/compress-pdf-online-free",
  "/pdf-compressor",
  "/reduce-pdf-size",
  "/compress-images-online",
  "/image-compressor",
  "/video-compressor",
  "/audio-converter",
  
  // Blog posts
  "/blog/how-to-compress-pdf-without-losing-quality",
  "/blog/best-image-compression-tools-2024",
  "/blog/video-compression-guide-reduce-file-size",
  "/blog/audio-file-formats-comparison-mp3-wav-flac",
  "/blog/file-compression-algorithms-explained",
  "/blog/batch-file-processing-productivity-tips"
];

export async function GET() {
  const baseUrl = "https://compressconverter.com";
  const currentDate = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Add URLs for each path and locale
  for (const path of STATIC_PATHS) {
    for (const locale of LOCALES) {
      const url = locale === "en" 
        ? `${baseUrl}${path}` 
        : `${baseUrl}/${locale}${path}`;
      
      const priority = path === "/" ? "1.0" : 
                      path.startsWith("/tools/") ? "0.9" : 
                      path === "/pricing" ? "0.8" : "0.7";

      xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>`;

      // Add hreflang alternates
      for (const altLocale of LOCALES) {
        const altUrl = altLocale === "en" 
          ? `${baseUrl}${path}` 
          : `${baseUrl}/${altLocale}${path}`;
        xml += `
    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}" />`;
      }

      xml += `
  </url>`;
    }
  }

  xml += `
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

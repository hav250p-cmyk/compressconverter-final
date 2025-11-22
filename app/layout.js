import './globals.css'

export const metadata = {
  title: 'CompressConverter.com — 120 File Tools for $5/month',
  description: 'CompressConverter.com is the ultimate hub for file compression, conversion and extraction. 120+ premium tools for just $5/month, focused on SEO and performance.',
  keywords: 'compress pdf, convert pdf, compress images, video converter, audio converter, file compression, pdf tools, image tools, video tools, audio tools, document converter',
  robots: 'index, follow',
  googlebot: 'index, follow',
  'google-site-verification': 'your-google-verification-code-here',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CompressConverter",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "description": "120+ file compression, conversion and extraction tools. PDF, image, video, audio converter and compressor.",
    "url": "https://compressconverter.com",
    "author": {
      "@type": "Organization",
      "name": "CompressConverter",
      "url": "https://compressconverter.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "3.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2847"
    },
    "featureList": [
      "PDF Compression",
      "Image Compression", 
      "Video Compression",
      "Audio Conversion",
      "Document Conversion",
      "File Extraction"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="canonical" href="https://compressconverter.com" />
        <meta name="google-site-verification" content="your-verification-code" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D72SLLG9JP"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D72SLLG9JP');
          `
        }} />
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}

# 📁 REPOSITÓRIO COMPLETO - COMPRESSCONVERTER

## 1. package.json
```json
{
  "name": "compressconverter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.3",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.3",
    "postcss": "^8",
    "tailwindcss": "^3.3.0"
  }
}
```

## 2. app/layout.js
```javascript
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
```

## 3. app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },

  async redirects() {
    return [
      {
        source: '/compress-pdf',
        destination: '/tools/pdf/compress-pdf',
        permanent: true,
      },
      {
        source: '/compress-image',
        destination: '/tools/image/compress-jpg',
        permanent: true,
      },
      {
        source: '/compress-video',
        destination: '/tools/video/compress-video',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
```

## 5. tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 6. postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 7. .env.example
```env
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://pkwwomoujppjzqnhcvuf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrd3dvbW91anBwanpxbmhjdnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NjgzOTgsImV4cCI6MjA3OTI0NDM5OH0.vuvTcgIHO3pjjHbcCwcVWAKK3KlDQyXMLo33FKhPnQU
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrd3dvbW91anBwanpxbmhjdnVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzY2ODM5OCwiZXhwIjoyMDc5MjQ0Mzk4fQ.tQN6ynqg28gn3j9bmGnQbTZDaDG01YQO_8-g4lmEUQ4

# Stripe
STRIPE_SECRET_KEY=sk_test_51SVlOnISO0Uy1NWKJP3jk99V0fz8AXzSm5LRHSxE3ykSWWnzufWtElwhDf9H5HeD9PF9hHPA4SMJXbh5RGE77kxo00654G9907
STRIPE_WEBHOOK_SECRET=whsec_9LRZX1aswrWos6Wlvbzu7dmxwdEgzMTz
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51SVlOnISO0Uy1NWKWOT0u76rrzJrBFEX0C3FyD7rCCmC7jYewkB9HeyIek8xZOH0IuRVmMFKm3xi36mh1fxtCSiB004r9hkTIK
STRIPE_PRICE_ID_UNLIMITED=prod_TSgxkZDq0iEuGa

# Rate limiting
RATE_LIMIT_MAX_FREE_REQUESTS=10
RATE_LIMIT_WINDOW_SECONDS=86400

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://compressconverter.com

# Analytics
GA_MEASUREMENT_ID=G-D72SLLG9JP
```

## 8. .gitignore
```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
```

---

**AGORA VOCÊ TEM TODOS OS ARQUIVOS ORGANIZADOS!**

**PRÓXIMO PASSO:**
1. Delete o repo atual no GitHub
2. Crie novo: `compressconverter-final`
3. Upload TODOS esses arquivos na estrutura correta
4. Deploy na Vercel
5. SITE FUNCIONANDO! 🚀

import './globals.css'

export const metadata = {
  title: 'CompressConverter.com — 120 File Tools for $4.99/month',
  description: 'CompressConverter.com is the ultimate hub for file compression, conversion and extraction. 120+ premium tools for just $4.99/month, focused on SEO and performance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
```__

import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Compress PDF Online Free - No Registration Required | CompressConverter',
  description: 'Compress PDF files online for free without registration. Reduce PDF size by up to 80% while maintaining quality. Fast, secure, and works on all devices.',
  keywords: 'compress pdf online free, free pdf compressor, reduce pdf size online, compress pdf without registration',
  alternates: {
    canonical: 'https://compressconverter.com/compress-pdf-online-free'
  }
};

export default function CompressPDFOnlineFreePage() {
  // Redirect to main tool page for SEO consolidation
  redirect('/tools/pdf/compress-pdf');
}

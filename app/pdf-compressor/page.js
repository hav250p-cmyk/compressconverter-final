import { redirect } from 'next/navigation';

export const metadata = {
  title: 'PDF Compressor - Best Online PDF Compression Tool 2024 | CompressConverter',
  description: 'Professional PDF compressor tool. Compress PDF files up to 80% smaller while maintaining quality. Trusted by 100,000+ users worldwide.',
  keywords: 'pdf compressor, best pdf compressor, online pdf compressor, professional pdf compression',
  alternates: {
    canonical: 'https://compressconverter.com/pdf-compressor'
  }
};

export default function PDFCompressorPage() {
  redirect('/tools/pdf/compress-pdf');
}

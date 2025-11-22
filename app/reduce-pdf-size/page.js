import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Reduce PDF Size Online - Make PDF Smaller Free | CompressConverter',
  description: 'Reduce PDF file size online for free. Make PDF smaller without losing quality. Perfect for email attachments and web sharing.',
  keywords: 'reduce pdf size, make pdf smaller, shrink pdf file, pdf size reducer',
  alternates: {
    canonical: 'https://compressconverter.com/reduce-pdf-size'
  }
};

export default function ReducePDFSizePage() {
  redirect('/tools/pdf/compress-pdf');
}

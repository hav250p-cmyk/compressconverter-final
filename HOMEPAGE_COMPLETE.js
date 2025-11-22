// app/page.js - ARQUIVO PRINCIPAL DA HOMEPAGE

const ALL_TOOLS = {
  pdf: [
    'Compress PDF', 'PDF to Word', 'PDF to Excel', 'PDF to JPG', 'Merge PDF', 'Split PDF', 'Rotate PDF', 'Unlock PDF',
    'PDF to PNG', 'Word to PDF', 'Excel to PDF', 'JPG to PDF', 'PNG to PDF', 'PDF Password', 'PDF Metadata', 'PDF Watermark'
  ],
  image: [
    'Compress JPG', 'Compress PNG', 'JPG to PNG', 'PNG to JPG', 'HEIC to JPG', 'Resize Image', 'Crop Image', 'Remove Background',
    'WebP Converter', 'SVG Converter', 'GIF Compressor', 'TIFF Converter', 'BMP Converter', 'Image Watermark', 'Image Filter', 'Image Rotate'
  ],
  video: [
    'Compress Video', 'MP4 to AVI', 'AVI to MP4', 'MOV to MP4', 'Cut Video', 'Extract Audio', 'Add Subtitles', 'Video to GIF',
    'MKV Converter', 'WMV Converter', 'FLV Converter', '3GP Converter', 'Video Watermark', 'Video Rotate', 'Video Merge', 'Video Split'
  ],
  audio: [
    'Compress Audio', 'MP3 to WAV', 'WAV to MP3', 'FLAC to MP3', 'Cut Audio', 'Merge Audio', 'Normalize Audio', 'Remove Noise',
    'AAC Converter', 'OGG Converter', 'M4A Converter', 'WMA Converter', 'Audio Fade', 'Audio Reverse', 'Audio Speed', 'Audio Pitch'
  ],
  document: [
    'Word to PDF', 'Excel to PDF', 'PowerPoint to PDF', 'PDF to Word', 'PDF to Excel', 'PDF to PowerPoint', 'ODT Converter', 'RTF Converter',
    'TXT to PDF', 'CSV to Excel', 'JSON to CSV', 'XML Converter', 'EPUB Converter', 'MOBI Converter', 'DOC Converter', 'DOCX Converter'
  ],
  archive: [
    'ZIP Extractor', 'RAR Extractor', '7Z Extractor', 'TAR Extractor', 'Create ZIP', 'Create RAR', 'Create 7Z', 'Create TAR',
    'GZ Extractor', 'BZ2 Extractor', 'XZ Extractor', 'CAB Extractor', 'ISO Extractor', 'DMG Extractor', 'Archive Converter', 'Batch Extract'
  ],
  other: [
    'QR Code Generator', 'Barcode Generator', 'Password Generator', 'Hash Generator', 'Color Picker', 'Unit Converter', 'Text Counter', 'Base64 Encoder',
    'URL Shortener', 'JSON Formatter', 'CSS Minifier', 'JS Minifier', 'HTML Minifier', 'Image OCR', 'Text to Speech', 'Speech to Text'
  ]
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Trust Badges */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-8 text-sm">
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              <span className="font-medium">SSL 256-bit</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🛡️</span>
              <span className="font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🗑️</span>
              <span className="font-medium">Auto-delete</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">⚡</span>
              <span className="font-medium">Processamento local</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🌍</span>
              <span className="font-medium">Servidores globais</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CompressConverter</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/tools" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Tools</a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Pricing</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Blog</a>
              <a href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Login</a>
              <a href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Start Free</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-6">
            🚀 NO ADS • SEO-FIRST APPROACH
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            120 file compression and
            <span className="block text-blue-600">conversion tools</span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-2">
              for just <span className="text-green-600 font-bold">$3/month</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CompressConverter.com is the ultimate hub for file compression, conversion and extraction. 
            No invasive ads, 100% focused on productivity and organic search ranking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/auth/signup" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 shadow-lg text-center">
              Start Free (10 tasks/day)
            </a>
            <a href="/pricing" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 text-center">
              View Unlimited Plan
            </a>
          </div>

          {/* Limited Offer */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6 mb-12 shadow-xl">
            <div className="text-center">
              <div className="text-sm font-bold mb-2">🔥 LIMITED OFFER</div>
              <div className="text-2xl font-bold mb-2">First 1000 users pay only $3/month</div>
              <div className="text-sm opacity-90 mb-4">
                Regular price: $5/month • Save 40% • Limited time only
              </div>
              <div className="flex justify-center items-center gap-4 text-sm">
                <span>⏰ Only 847 spots left</span>
                <span>•</span>
                <span>💎 Lifetime access at promotional price</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { name: 'PDF', desc: 'Compress, convert and merge PDFs without quality loss', icon: '📄' },
            { name: 'Images', desc: 'Aggressive optimization without losing visual sharpness', icon: '🖼️' },
            { name: 'Videos', desc: 'Reduce file size by up to 80% for faster sharing', icon: '🎬' },
            { name: 'Audio', desc: 'Convert and compress audio files with perfect quality', icon: '🎵' },
            { name: 'Documents', desc: 'Convert between Word, Excel, PowerPoint and PDF', icon: '📝' },
            { name: 'Archives', desc: 'Extract and create ZIP, RAR, 7Z and other formats', icon: '📦' },
            { name: 'Utilities', desc: 'QR codes, password generator, and productivity tools', icon: '🛠️' },
            { name: 'All Tools', desc: 'Access to complete suite of 120+ premium tools', icon: '⭐' }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.desc}</p>
            </div>
          ))}
        </div>

        {/* All Tools Listed for SEO */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">All 120+ Tools Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(ALL_TOOLS).map(([category, tools]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize flex items-center">
                  <span className="text-2xl mr-3">
                    {category === 'pdf' ? '📄' : 
                     category === 'image' ? '🖼️' :
                     category === 'video' ? '🎬' : 
                     category === 'audio' ? '🎵' :
                     category === 'document' ? '📝' :
                     category === 'archive' ? '📦' : '🛠️'}
                  </span>
                  {category === 'pdf' ? 'PDF Tools' : 
                   category === 'image' ? 'Image Tools' :
                   category === 'video' ? 'Video Tools' : 
                   category === 'audio' ? 'Audio Tools' :
                   category === 'document' ? 'Document Tools' :
                   category === 'archive' ? 'Archive Tools' : 'Other Tools'}
                </h3>
                <ul className="space-y-1">
                  {tools.map((tool, index) => (
                    <li key={index} className="text-sm text-gray-600">• {tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Security Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Privacy & Security Guaranteed</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗑️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Delete Files</h3>
              <p className="text-sm text-gray-600">All files automatically deleted after 1 hour</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SSL Encryption</h3>
              <p className="text-sm text-gray-600">256-bit SSL encryption for all transfers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Zero Logs</h3>
              <p className="text-sm text-gray-600">We don't store or log your file contents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-sm text-gray-600">Full compliance with privacy regulations</p>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-xl p-6 border">
            <h3 className="font-bold text-gray-900 mb-4">🔐 Our Privacy Guarantee:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Your files are processed locally and never stored permanently</li>
              <li>• No employee or third party has access to your files</li>
              <li>• We never use your data for advertising or marketing</li>
              <li>• All processing happens on secure, encrypted servers</li>
              <li>• Complete GDPR compliance with right to deletion</li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust CompressConverter for their file processing needs
          </p>
          <div className="bg-white rounded-xl p-6 text-gray-900 mb-6">
            <h3 className="font-bold mb-4">🔥 Limited Time Offer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">Free Plan</div>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• 10 tasks per day</li>
                  <li>• All 120 tools</li>
                  <li>• No credit card required</li>
                </ul>
                <a href="/auth/signup" className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 block text-center">
                  Start Free
                </a>
              </div>
              <div className="text-center border-2 border-red-200 rounded-xl p-4 bg-red-50">
                <div className="text-3xl font-bold text-red-600 mb-2">$3/month</div>
                <div className="text-xs text-red-600 mb-2 line-through">Regular: $5/month</div>
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Unlimited tasks</li>
                  <li>• Priority processing</li>
                  <li>• No ads</li>
                  <li>• Premium support</li>
                </ul>
                <a href="/pricing" className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 block text-center">
                  Get 40% Discount
                </a>
                <p className="text-xs text-red-600 mt-2">⏰ Only 847 spots left</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="text-xl font-bold">CompressConverter</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                The most trusted platform for file compression, conversion and extraction. 
                120+ premium tools with complete focus on privacy and security.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>🔒 SSL 256-bit</span>
                <span>🛡️ GDPR Compliant</span>
                <span>🗑️ Auto-delete</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/tools/pdf" className="hover:text-white">Compress PDF</a></li>
                <li><a href="/tools/image" className="hover:text-white">Compress Images</a></li>
                <li><a href="/tools/video" className="hover:text-white">Compress Video</a></li>
                <li><a href="/tools/audio" className="hover:text-white">Convert Audio</a></li>
                <li><a href="/tools" className="hover:text-white">View all (120+)</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/about" className="hover:text-white">About us</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Use</a></li>
                <li><a href="/security" className="hover:text-white">Security</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 CompressConverter.com. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <span>🌍 Available in 60 languages</span>
              <span>⚡ Processing in &lt;30s</span>
              <span>🔐 100% Secure</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

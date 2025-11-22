const ALL_TOOLS = {
  pdf: [
    { name: 'Compress PDF', desc: 'Reduce PDF file size while maintaining quality', href: '/tools/pdf/compress-pdf', icon: '📄' },
    { name: 'PDF to Word', desc: 'Convert PDF documents to editable Word files', href: '/tools/pdf/pdf-to-word', icon: '📝' },
    { name: 'PDF to Excel', desc: 'Extract data from PDF to Excel spreadsheets', href: '/tools/pdf/pdf-to-excel', icon: '📊' },
    { name: 'PDF to JPG', desc: 'Convert PDF pages to high-quality images', href: '/tools/pdf/pdf-to-jpg', icon: '🖼️' },
    { name: 'Merge PDF', desc: 'Combine multiple PDF files into one document', href: '/tools/pdf/merge-pdf', icon: '🔗' },
    { name: 'Split PDF', desc: 'Divide PDF into separate pages or sections', href: '/tools/pdf/split-pdf', icon: '✂️' },
    { name: 'Rotate PDF', desc: 'Rotate PDF pages to correct orientation', href: '/tools/pdf/rotate-pdf', icon: '🔄' },
    { name: 'Unlock PDF', desc: 'Remove password protection from PDF files', href: '/tools/pdf/unlock-pdf', icon: '🔓' },
  ],
  image: [
    { name: 'Compress JPG', desc: 'Reduce JPG file size up to 80%', href: '/tools/image/compress-jpg', icon: '🖼️' },
    { name: 'Compress PNG', desc: 'Optimize PNG images without quality loss', href: '/tools/image/compress-png', icon: '🎨' },
    { name: 'JPG to PNG', desc: 'Convert JPG images to PNG format', href: '/tools/image/jpg-to-png', icon: '🔄' },
    { name: 'PNG to JPG', desc: 'Convert PNG images to JPG format', href: '/tools/image/png-to-jpg', icon: '🔄' },
    { name: 'HEIC to JPG', desc: 'Convert iPhone HEIC photos to JPG', href: '/tools/image/heic-to-jpg', icon: '📱' },
    { name: 'Resize Image', desc: 'Change image dimensions and resolution', href: '/tools/image/resize-image', icon: '📏' },
    { name: 'Crop Image', desc: 'Cut and trim images to desired size', href: '/tools/image/crop-image', icon: '✂️' },
    { name: 'Remove Background', desc: 'Automatically remove image backgrounds', href: '/tools/image/remove-background', icon: '🎭' },
  ],
  video: [
    { name: 'Compress Video', desc: 'Reduce video file size for faster sharing', href: '/tools/video/compress-video', icon: '🎬' },
    { name: 'MP4 to AVI', desc: 'Convert MP4 videos to AVI format', href: '/tools/video/mp4-to-avi', icon: '🔄' },
    { name: 'AVI to MP4', desc: 'Convert AVI videos to MP4 format', href: '/tools/video/avi-to-mp4', icon: '🔄' },
    { name: 'MOV to MP4', desc: 'Convert QuickTime MOV to MP4', href: '/tools/video/mov-to-mp4', icon: '🎥' },
    { name: 'Cut Video', desc: 'Trim and cut video clips', href: '/tools/video/cut-video', icon: '✂️' },
    { name: 'Extract Audio', desc: 'Extract audio track from video files', href: '/tools/video/extract-audio', icon: '🎵' },
    { name: 'Add Subtitles', desc: 'Add subtitle tracks to video files', href: '/tools/video/add-subtitles', icon: '📝' },
    { name: 'Video to GIF', desc: 'Convert video clips to animated GIFs', href: '/tools/video/video-to-gif', icon: '🎞️' },
  ],
  audio: [
    { name: 'Compress Audio', desc: 'Reduce audio file size while preserving quality', href: '/tools/audio/compress-audio', icon: '🎵' },
    { name: 'MP3 to WAV', desc: 'Convert MP3 files to WAV format', href: '/tools/audio/mp3-to-wav', icon: '🔄' },
    { name: 'WAV to MP3', desc: 'Convert WAV files to MP3 format', href: '/tools/audio/wav-to-mp3', icon: '🔄' },
    { name: 'FLAC to MP3', desc: 'Convert FLAC files to MP3 format', href: '/tools/audio/flac-to-mp3', icon: '🎼' },
    { name: 'Cut Audio', desc: 'Trim and cut audio clips', href: '/tools/audio/cut-audio', icon: '✂️' },
    { name: 'Merge Audio', desc: 'Combine multiple audio files', href: '/tools/audio/merge-audio', icon: '🔗' },
    { name: 'Normalize Audio', desc: 'Adjust audio volume levels', href: '/tools/audio/normalize-audio', icon: '🔊' },
    { name: 'Remove Noise', desc: 'Clean up audio recordings', href: '/tools/audio/remove-noise', icon: '🧹' },
  ]
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CompressConverter</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Login
              </a>
              <a href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                Start Free
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All 120+ File Tools
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Compress, convert, and extract files with professional-grade tools
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Tools by Category */}
        <div className="space-y-12">
          {Object.entries(ALL_TOOLS).map(([category, tools]) => (
            <div key={category} className="bg-white rounded-2xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize flex items-center">
                <span className="text-3xl mr-3">
                  {category === 'pdf' ? '📄' : 
                   category === 'image' ? '🖼️' :
                   category === 'video' ? '🎬' : '🎵'}
                </span>
                {category === 'pdf' ? 'PDF Tools' : 
                 category === 'image' ? 'Image Tools' :
                 category === 'video' ? 'Video Tools' : 'Audio Tools'}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <a
                    key={index}
                    href={tool.href}
                    className="group p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-2xl mb-3">{tool.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600">{tool.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust CompressConverter for their file processing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auth/signup" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Start Free (10 tasks/day)
            </a>
            <a href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Upgrade to Premium
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

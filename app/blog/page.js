const BLOG_POSTS = [
  {
    slug: 'how-to-compress-pdf-without-losing-quality',
    title: 'How to Compress PDF Without Losing Quality: Complete Guide 2024',
    excerpt: 'Learn the best methods to compress PDF files while maintaining perfect quality. Professional tips and tools comparison.',
    date: '2024-11-21',
    readTime: '8 min read',
    category: 'PDF Tools',
    keywords: 'compress pdf quality, pdf compression guide, reduce pdf size'
  },
  {
    slug: 'best-image-compression-tools-2024',
    title: 'Best Image Compression Tools 2024: JPG vs PNG vs WebP',
    excerpt: 'Complete comparison of image compression formats and tools. Which format gives the best compression ratio?',
    date: '2024-11-20',
    readTime: '12 min read',
    category: 'Image Tools',
    keywords: 'image compression, jpg vs png, webp compression'
  },
  {
    slug: 'video-compression-guide-reduce-file-size',
    title: 'Video Compression Guide: Reduce File Size by 80% Without Quality Loss',
    excerpt: 'Professional video compression techniques. Learn how to compress videos for web, social media, and storage.',
    date: '2024-11-19',
    readTime: '15 min read',
    category: 'Video Tools',
    keywords: 'video compression, reduce video size, compress mp4'
  },
  {
    slug: 'audio-file-formats-comparison-mp3-wav-flac',
    title: 'Audio File Formats Comparison: MP3 vs WAV vs FLAC vs AAC',
    excerpt: 'Complete guide to audio formats. Which format is best for quality, compression, and compatibility?',
    date: '2024-11-18',
    readTime: '10 min read',
    category: 'Audio Tools',
    keywords: 'audio formats, mp3 vs wav, flac compression'
  },
  {
    slug: 'file-compression-algorithms-explained',
    title: 'File Compression Algorithms Explained: Lossless vs Lossy',
    excerpt: 'Deep dive into compression algorithms. Understand how different compression methods work and when to use them.',
    date: '2024-11-17',
    readTime: '18 min read',
    category: 'Technical',
    keywords: 'compression algorithms, lossless compression, lossy compression'
  },
  {
    slug: 'batch-file-processing-productivity-tips',
    title: 'Batch File Processing: 10 Productivity Tips for Professionals',
    excerpt: 'Boost your productivity with batch file processing techniques. Handle hundreds of files efficiently.',
    date: '2024-11-16',
    readTime: '7 min read',
    category: 'Productivity',
    keywords: 'batch processing, file automation, productivity tips'
  }
];

export const metadata = {
  title: 'File Compression Blog - Tips, Guides & Best Practices | CompressConverter',
  description: 'Expert guides on file compression, conversion, and optimization. Learn professional techniques for PDF, image, video, and audio processing.',
  keywords: 'file compression blog, pdf compression guide, image optimization, video compression tips',
  alternates: {
    canonical: 'https://compressconverter.com/blog'
  }
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CompressConverter</span>
            </a>
            <div className="flex items-center space-x-4">
              <a href="/tools" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Tools</a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Pricing</a>
              <a href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Start Free</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            File Compression Blog
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Expert guides, tips, and best practices for file compression and optimization
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search articles..."
              className="px-6 py-3 rounded-l-xl text-gray-900 w-80 focus:outline-none"
            />
            <button className="bg-blue-800 px-6 py-3 rounded-r-xl hover:bg-blue-900">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                  <a href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest tips and guides delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-xl text-gray-900 flex-1 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50">
              Subscribe
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['PDF Tools', 'Image Tools', 'Video Tools', 'Audio Tools'].map((category, index) => (
              <a
                key={index}
                href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-3">
                  {category === 'PDF Tools' ? '📄' : 
                   category === 'Image Tools' ? '🖼️' :
                   category === 'Video Tools' ? '🎬' : '🎵'}
                </div>
                <h3 className="font-semibold text-gray-900">{category}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {BLOG_POSTS.filter(post => post.category === category).length} articles
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

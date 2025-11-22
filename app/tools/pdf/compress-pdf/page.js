'use client';

import { useState } from 'react';

export default function CompressPDFPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
      setResult(null);
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleCompress = async () => {
    if (!file) return;
    
    setLoading(true);
    
    // Simulate compression process
    setTimeout(() => {
      const originalSize = file.size;
      const compressedSize = Math.floor(originalSize * 0.7); // 30% reduction simulation
      
      setResult({
        originalSize: (originalSize / 1024 / 1024).toFixed(2),
        compressedSize: (compressedSize / 1024 / 1024).toFixed(2),
        reduction: Math.floor(((originalSize - compressedSize) / originalSize) * 100)
      });
      
      setLoading(false);
    }, 3000);
  };

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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Compress PDF Files
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Reduce PDF file size while maintaining quality. Fast, secure, and free.
          </p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <span className="mr-2">🔒</span>
              SSL Encrypted
            </span>
            <span className="flex items-center">
              <span className="mr-2">🗑️</span>
              Auto-delete in 1h
            </span>
            <span className="flex items-center">
              <span className="mr-2">⚡</span>
              Process in &lt;30s
            </span>
          </div>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
          {!file ? (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose PDF file to compress
              </h3>
              <p className="text-gray-600 mb-6">
                Drag and drop your PDF here, or click to browse
              </p>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="pdf-upload"
              />
              <label
                htmlFor="pdf-upload"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
              >
                Select PDF File
              </label>
              <p className="text-xs text-gray-500 mt-4">
                Maximum file size: 100MB for free users, 500MB for premium
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {file.name}
              </h3>
              <p className="text-gray-600 mb-6">
                Size: {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              
              {!loading && !result && (
                <button
                  onClick={handleCompress}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700"
                >
                  Compress PDF
                </button>
              )}
              
              {loading && (
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600">Compressing your PDF...</p>
                </div>
              )}
              
              {result && (
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="text-green-600 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Compression Complete!
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{result.originalSize} MB</div>
                      <div className="text-sm text-gray-600">Original</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{result.compressedSize} MB</div>
                      <div className="text-sm text-gray-600">Compressed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{result.reduction}%</div>
                      <div className="text-sm text-gray-600">Reduction</div>
                    </div>
                  </div>
                  <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                    Download Compressed PDF
                  </button>
                </div>
              )}
              
              <button
                onClick={() => {
                  setFile(null);
                  setResult(null);
                  setLoading(false);
                }}
                className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
              >
                Choose Another File
              </button>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-gray-900 mb-2">100% Secure</h3>
            <p className="text-sm text-gray-600">Your files are encrypted and automatically deleted after 1 hour</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-600">Advanced compression algorithms process files in under 30 seconds</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-900 mb-2">Quality Preserved</h3>
            <p className="text-sm text-gray-600">Smart compression maintains document quality and readability</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Tools?</h2>
          <p className="mb-6">Get unlimited access to all 120+ tools for just $3/month</p>
          <a href="/pricing" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50">
            Upgrade to Premium
          </a>
        </div>
      </main>
    </div>
  );
}

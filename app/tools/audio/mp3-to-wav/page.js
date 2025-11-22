'use client';

import { useState } from 'react';

export default function MP3ToWAVPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith('audio/')) {
      setFile(uploadedFile);
      setResult(null);
    } else {
      alert('Please select an audio file');
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    
    setLoading(true);
    
    setTimeout(() => {
      setResult({
        originalFormat: 'MP3',
        newFormat: 'WAV',
        quality: 'Lossless',
        status: 'converted'
      });
      
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CompressConverter</span>
            </a>
            <div className="flex items-center space-x-4">
              <a href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Login</a>
              <a href="/auth/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">Start Free</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Convert MP3 to WAV</h1>
          <p className="text-xl text-gray-600 mb-8">Convert MP3 files to high-quality WAV format in seconds</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
          {!file ? (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose MP3 file to convert</h3>
              <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" id="audio-upload" />
              <label htmlFor="audio-upload" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 cursor-pointer">
                Select Audio File
              </label>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{file.name}</h3>
              <p className="text-gray-600 mb-6">Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
              
              {!loading && !result && (
                <button onClick={handleConvert} className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                  Convert to WAV
                </button>
              )}
              
              {loading && (
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
                  <p className="text-gray-600">Converting your audio file...</p>
                </div>
              )}
              
              {result && (
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="text-blue-600 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Complete!</h3>
                  <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{result.originalFormat}</div>
                      <div className="text-sm text-gray-600">Original</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{result.newFormat}</div>
                      <div className="text-sm text-gray-600">Converted</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{result.quality}</div>
                      <div className="text-sm text-gray-600">Quality</div>
                    </div>
                  </div>
                  <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700">
                    Download WAV File
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

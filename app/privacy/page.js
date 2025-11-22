export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CompressConverter</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            <strong>Last updated:</strong> November 21, 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Privacy Commitment</h2>
          <p className="mb-6">
            At CompressConverter.com, your privacy is our top priority. We are committed to protecting your personal information and being transparent about how we collect, use, and protect your data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">File Processing and Storage</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-green-800 mb-3">🔒 Your Files Are Safe</h3>
            <ul className="space-y-2 text-green-700">
              <li>• <strong>Automatic Deletion:</strong> All uploaded files are automatically deleted from our servers within 1 hour</li>
              <li>• <strong>No Human Access:</strong> No employee or third party has access to your files during processing</li>
              <li>• <strong>Encrypted Transfer:</strong> All file uploads and downloads use 256-bit SSL encryption</li>
              <li>• <strong>No Permanent Storage:</strong> We never store your files permanently on our servers</li>
              <li>• <strong>No Content Analysis:</strong> We do not scan, analyze, or read the content of your files</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <h3 className="text-lg font-semibold mb-3">Account Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Email address (for account creation and communication)</li>
            <li>Password (encrypted and never stored in plain text)</li>
            <li>Subscription status and billing information</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">Usage Information</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Number of files processed (for usage limits)</li>
            <li>Tool usage statistics (anonymous)</li>
            <li>Basic analytics (page views, session duration)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We DON'T Do</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <ul className="space-y-2 text-red-700">
              <li>• We <strong>DO NOT</strong> sell your personal information to third parties</li>
              <li>• We <strong>DO NOT</strong> use your files for advertising or marketing</li>
              <li>• We <strong>DO NOT</strong> share your files with other users or companies</li>
              <li>• We <strong>DO NOT</strong> use your data to train AI models</li>
              <li>• We <strong>DO NOT</strong> track you across other websites</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
          <p className="mb-4">We implement industry-standard security measures:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>SSL/TLS Encryption:</strong> All data in transit is encrypted</li>
            <li><strong>Secure Servers:</strong> Our infrastructure is hosted on secure, monitored servers</li>
            <li><strong>Regular Security Audits:</strong> We conduct regular security assessments</li>
            <li><strong>Access Controls:</strong> Strict access controls limit who can access our systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR Compliance</h2>
          <p className="mb-4">We are fully compliant with the General Data Protection Regulation (GDPR). You have the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and data</li>
            <li>Export your data</li>
            <li>Object to data processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Analytics</h2>
          <p className="mb-4">We use minimal cookies for:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Essential website functionality</li>
            <li>User authentication</li>
            <li>Anonymous usage analytics (Google Analytics)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p><strong>Email:</strong> privacy@compressconverter.com</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
        </div>
      </main>
    </div>
  );
}

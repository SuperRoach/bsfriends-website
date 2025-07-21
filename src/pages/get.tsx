import Layout from '@/components/Layout';
import DownloadButtons from '@/components/DownloadButtons';

export default function Get() {
  return (
    <Layout 
      title="Download Bigscreen friends App"
      description="Download the Bigscreen Friends mobile app for iOS and Android. Available on the App Store and Google Play Store."
    >
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Download Bigscreen Friends
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get the app and start connecting with friends today
            </p>
            
            <DownloadButtons />
          </div>
    
          {/* Installation Instructions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Installation Instructions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  For iOS Users:
                </h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-4">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-4">
                    <strong>Note:</strong> The iOS version is currently in testing.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://forms.gle/FMG3Y1RqSRpYSf6G8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Sign Up for iOS Testing
                    </a>
                  </div>
                </div>
                <ol className="text-gray-500 dark:text-gray-500 space-y-2 list-decimal list-inside opacity-60">
                  <li>Tap the &ldquo;Download on the App Store&rdquo; button above</li>
                  <li>You&rsquo;ll be redirected to the App Store</li>
                  <li>Tap &ldquo;Get&rdquo; to download and install</li>
                  <li>Open the app and create your account</li>
                  <li>Start connecting with friends!</li>
                </ol>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  For Android Users:
                </h3>
                <ol className="text-gray-600 dark:text-gray-300 space-y-2 list-decimal list-inside">
                  <li>Tap the &ldquo;Get it on Google Play&rdquo; button above</li>
                  <li>You&rsquo;ll be redirected to Google Play Store</li>
                  <li>Tap &ldquo;Install&rdquo; to download and install</li>
                  <li>Open the app and create your account</li>
                  <li>Start connecting with friends!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
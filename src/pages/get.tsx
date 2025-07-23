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
              Get the app and start connecting with your friends today
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
                <ol className="text-gray-600 dark:text-gray-300 space-y-2 list-decimal list-inside">
                  <li>Tap the &ldquo;Download on the App Store&rdquo; button above</li>
                  <li>You&rsquo;ll be redirected to the App Store</li>
                  <li>Tap &ldquo;Get&rdquo; to download and install</li>
                  <li>Open the app and login to your bigscreen account</li>
                  <li>That's it!</li>
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
                  <li>Open the app and login to your bigscreen account</li>
                  <li>You're done!</li>
                </ol>
              </div>
            </div>
          </div>

          {/* iOS Testing Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Join Our iOS Beta Testing Program
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Want to help shape the future of Bigscreen Friends? Join our beta testing program!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Features First
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access new features and improvements weeks before they're released to the public. Be the first to experience what's coming next!
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Shape the App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your feedback directly influences our development. Help us build the features you want and fix issues that matter to you.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>How it works:</strong> Click the button below to fill out a quick form. Make sure to use your Apple ID email (for iOS) or Google account email (for Android) so we can add you as a tester.
                  </p>
                </div>
                
                <a
                  href="https://forms.gle/FMG3Y1RqSRpYSf6G8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Become a Beta Tester
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  Join our community of testers and help us make the app even better
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
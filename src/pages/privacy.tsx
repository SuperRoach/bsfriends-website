import Layout from '@/components/Layout';

export default function Privacy() {
  return (
    <Layout 
      title="Privacy Policy - Bigscreen Friends"
      description="Bigscreen Friends Privacy Policy - Learn how we protect your data and privacy when using our mobile app."
    >
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Last updated: 4th April, 2025
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Bigscreen Friends (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy outlines how we handle information when you use our Android application, Bigscreen Friends.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information Collection and Use
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We do not collect any personally identifiable information from users. Logins are transmitted to the Bigscreen servers directly.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                No Data Logging
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We do not track or log your usage of the app. No analytics, error logs, or personal identifiers are collected.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our app does not use cookies or store any cookie-like data. We do store in secure storage your access key from a login.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Bigscreen Friends uses the bigscreen API where required, to get the rooms list, and your personal friends list.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Links to Other Sites
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The app may contain links to external websites. Please note that we are not responsible for the content or privacy practices of these third-party sites.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update this policy from time to time. Any changes will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of the app after any changes constitutes acceptance of the new policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions or concerns about this Privacy Policy, feel free to contact us at: <strong>bcrossappdev@gmail.com</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
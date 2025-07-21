import Head from 'next/head';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = 'Bigscreen Friends - Mobile App',
  description = 'Download Bigscreen Friends mobile app - see who is on the bigscreen, from the little screen'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png?v=1" />
        <link rel="shortcut icon" href="/favicon.png?v=1" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>&copy; 2025 Bigscreen Friends. All rights reserved. All our bin chickens are belong to us.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
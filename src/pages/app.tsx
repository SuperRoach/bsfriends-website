import Layout from '@/components/Layout';
import DownloadButtons from '@/components/DownloadButtons';
import { useRouter } from 'next/router';

export default function AppLink() {
  const router = useRouter();
  const profileId = router.query.id ?? router.query.profile;
  const profileLink = router.isReady && typeof profileId === 'string' && profileId
    ? router.asPath
    : null;

  return (
    <Layout
      title="You silly goose | Bigscreen Friends"
      description="This saved Bigscreen profile is waiting for you in the Bigscreen Friends app."
    >
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            You silly goose, you need the app to see this!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            This is a profile of someone you saved from Bigscreen, not a secret website. Grab Bigscreen Friends on your phone, then open the link again to find your friend.
          </p>
          {profileLink && (
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Didn&apos;t load the app? Try tapping{' '}
              <a href={profileLink} className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
                this link to their profile
              </a>{' '}
              from your phone&apos;s browser. If it stays in Safari, open the link from Messages instead.
            </p>
          )}
          <DownloadButtons />
        </div>
      </div>
    </Layout>
  );
}

import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/blog/PostCard';
import type { Metadata } from 'next';
import { Tektur, Syncopate } from 'next/font/google';

const tektur = Tektur({
  weight: ['400', '700'],
  variable: '--font-tektur',
  subsets: ['latin'],
});

const syncopate = Syncopate({
  weight: ['400', '700'],
  variable: '--font-syncopate',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Blog - Overture Agency',
  description: 'Latest insights, news, and updates from Overture Agency',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-fit h-fit p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full px-4 mx-auto mb-6">
            <h2 className={`${tektur.className} tracking-widest relative text-left z-10 text-md sm:text-sm text-black dark:text-white`}>
              Blog
            </h2>
          </div>
          <h1 className={`${syncopate.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4`}>
            Latest Insights & Updates
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay up to date with our latest thoughts, industry insights, and company news.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              No posts yet
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for our latest blog posts!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PostCard } from './PostCard';
import { Tektur, Syncopate } from 'next/font/google';
import type { PostPreview } from '@/types/blog';
import { getAllPosts } from '@/lib/blog';

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

export function BlogPreview() {
  const [posts, setPosts] = useState<PostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const recentPosts = posts.slice(0, 3); // Show only 3 most recent posts

  return (
    <section className="py-16 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-fit h-fit p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full px-4 mx-auto mb-6">
            <h2 className={`${tektur.className} tracking-widest relative text-left z-10 text-md sm:text-sm text-black dark:text-white`}>
              Blog
            </h2>
          </div>
          <h2 className={`${syncopate.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4`}>
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Stay updated with our latest thoughts and industry insights.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts →
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Loading blog posts...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
              Error
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {error}
            </p>
          </div>
        ) : recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our blog posts will be available soon. Check back later!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

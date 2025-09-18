import { notFound } from 'next/navigation';
import { getPostBySlug, getRecentPosts } from '@/lib/blog';
import { PostHeader } from '@/components/blog/PostHeader';
import { PostContent } from '@/components/blog/PostContent';
import { PostCard } from '@/components/blog/PostCard';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tektur } from 'next/font/google';

const tektur = Tektur({
  weight: ['400', '700'],
  variable: '--font-tektur',
  subsets: ['latin'],
});

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Overture Agency Blog`,
    description: post.excerpt || `Read ${post.title} on the Overture Agency blog`,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const recentPosts = await getRecentPosts(post?._id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article */}
        <article className="mb-16">
          <PostHeader post={post} />
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PostContent content={post.body} />
          </div>
        </article>

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <h2 className={`${tektur.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((recentPost) => (
                <PostCard key={recentPost._id} post={recentPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { getAllPostsSlugs } = await import('@/lib/blog');
  const slugs = await getAllPostsSlugs();
  return slugs;
}

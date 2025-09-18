import { notFound } from 'next/navigation';
import { getPostBySlug, getRecentPosts, getAllCategories } from '@/lib/blog';
import { BlogPostClient } from '@/components/blog/BlogPostClient';
import type { Metadata } from 'next';

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
  const categories = await getAllCategories();

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} recentPosts={recentPosts} categories={categories} />;
}

export async function generateStaticParams() {
  const { getAllPostsSlugs } = await import('@/lib/blog');
  const slugs = await getAllPostsSlugs();
  return slugs;
}

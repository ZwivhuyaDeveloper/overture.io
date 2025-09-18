import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Post, PostPreview } from '@/types/blog';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Query for getting all posts with basic info for listing
export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
      name
    },
    mainImage,
    publishedAt,
    excerpt
  }
`;

// Query for getting a single post by slug with full content
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    categories[]->{
      _id,
      title,
      slug,
      description
    },
    publishedAt,
    body
  }
`;

// Query for getting all posts slugs for static generation
export const postsSlugsQuery = `
  *[_type == "post"] {
    "params": {
      "slug": slug.current
    }
  }
`;

// Get all posts for listing
export async function getAllPosts(): Promise<PostPreview[]> {
  const posts = await client.fetch(postsQuery);
  return posts;
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await client.fetch(postBySlugQuery, { slug });
  return post;
}

// Get all posts slugs for static generation
export async function getAllPostsSlugs() {
  const slugs = await client.fetch(postsSlugsQuery);
  return slugs;
}

// Get recent posts (excluding current post)
export async function getRecentPosts(currentPostId?: string, limit = 3): Promise<PostPreview[]> {
  const query = `
    *[_type == "post" && _id != $currentPostId] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      author->{
        name
      },
      mainImage,
      publishedAt,
      excerpt
    }
  `;
  const posts = await client.fetch(query, { currentPostId, limit });
  return posts;
}

// Get posts by category
export async function getPostsByCategory(categorySlug: string): Promise<PostPreview[]> {
  const query = `
    *[_type == "post" && categories[]->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{
        name
      },
      mainImage,
      publishedAt,
      excerpt
    }
  `;
  const posts = await client.fetch(query, { categorySlug });
  return posts;
}

// Get all categories
export async function getAllCategories() {
  const query = `
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `;
  const categories = await client.fetch(query);
  return categories;
}

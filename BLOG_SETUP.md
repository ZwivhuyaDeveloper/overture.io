# Blog Functionality Setup

This document explains the blog functionality that has been implemented for the Overture Agency website using Sanity CMS.

## Overview

The blog system includes:
- Blog landing page (`/blog`)
- Individual blog post pages (`/blog/[slug]`)
- Blog preview section on the homepage
- Full integration with Sanity CMS for content management

## File Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # Blog landing page
│   │   └── [slug]/
│   │       ├── page.tsx          # Individual blog post page
│   │       └── not-found.tsx    # 404 page for blog posts
├── components/
│   └── blog/
│       ├── PostCard.tsx          # Individual post card component
│       ├── PostHeader.tsx        # Post header component
│       ├── PostContent.tsx       # Post content renderer
│       └── BlogPreview.tsx       # Homepage blog preview
├── lib/
│   └── blog.ts                   # Blog queries and utilities
└── types/
    └── blog.ts                   # TypeScript types for blog data
```

## Features

### 1. Blog Landing Page (`/blog`)
- Displays all blog posts in a responsive grid
- Shows post title, excerpt, author, and publication date
- Clickable cards that link to individual posts
- Responsive design (1 column on mobile, 3 on desktop)

### 2. Individual Blog Post Pages (`/blog/[slug]`)
- Full post content with proper typography
- Post header with title, date, author, and categories
- Portable text support for rich content
- Recent posts section
- Back to blog navigation
- 404 handling for non-existent posts

### 3. Homepage Blog Preview
- Shows 3 most recent posts
- "View All Posts" button linking to blog landing page
- Consistent styling with the rest of the site

### 4. Sanity CMS Integration
- Full content management through Sanity Studio
- Support for rich text content (Portable Text)
- Image handling with Sanity's image system
- Author and category management
- Automatic slug generation

## Content Structure

### Post Schema
- **Title**: String (required)
- **Slug**: Auto-generated from title
- **Author**: Reference to author document
- **Main Image**: Image with alt text and hotspot support
- **Categories**: Array of category references
- **Published At**: DateTime
- **Body**: Rich text content (Portable Text)
- **Excerpt**: Short description for previews

### Author Schema
- **Name**: String (required)
- **Slug**: Auto-generated from name
- **Image**: Profile image
- **Bio**: Biography text

### Category Schema
- **Title**: String (required)
- **Slug**: Auto-generated from title
- **Description**: Category description

## Usage

### 1. Creating Blog Posts
1. Access Sanity Studio at `/studio`
2. Navigate to "Posts" in the content structure
3. Click "Create new post"
4. Fill in the required fields:
   - Title (auto-generates slug)
   - Select author
   - Upload main image with alt text
   - Select categories
   - Set publication date
   - Write content using the rich text editor
5. Click "Publish"

### 2. Managing Authors and Categories
- Go to "Authors" or "Categories" in Sanity Studio
- Create new entries as needed
- These can be referenced when creating posts

### 3. Viewing the Blog
- Visit `/blog` to see all posts
- Click on any post to view the full content
- The homepage shows a preview of recent posts

## Styling

The blog components use:
- Tailwind CSS for styling
- Dark mode support
- Responsive design
- Consistent typography with the rest of the site
- Hover effects and transitions

## TypeScript Support

Full TypeScript support with proper types for:
- Post data
- Author data
- Category data
- Query responses
- Component props

## Performance

- Static generation with `getStaticParams`
- Image optimization with Next.js Image component
- Efficient data fetching with Sanity client
- Responsive images with proper sizing

## Environment Variables

Make sure these are set in your `.env.local` file:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-09-18
```

## Dependencies

The blog functionality uses these additional packages:
- `@sanity/client` - Sanity CMS client
- `@sanity/image-url` - Image URL generation
- `@portabletext/react` - Rich text rendering
- `next-sanity` - Next.js integration

## Customization

### Styling
- Modify Tailwind classes in component files
- Update colors in the design system
- Adjust responsive breakpoints as needed

### Content Structure
- Modify schemas in `src/sanity/schemaTypes/`
- Add custom fields to post type
- Create new content types as needed

### Queries
- Edit GROQ queries in `src/lib/blog.ts`
- Add new query functions as needed
- Modify existing queries for different data requirements

## Troubleshooting

### Common Issues

1. **Posts not showing**
   - Check Sanity environment variables
   - Verify posts are published in Sanity Studio
   - Check network connectivity

2. **Images not loading**
   - Verify image URLs in Sanity
   - Check image asset references
   - Ensure proper image dimensions

3. **Build errors**
   - Check TypeScript types
   - Verify all dependencies are installed
   - Check for missing imports

### Debug Mode

Add console logging in `src/lib/blog.ts` to debug data fetching:
```typescript
console.log('Fetched posts:', posts);
```

## Future Enhancements

- Search functionality
- Category filtering
- Author pages
- Comment system
- Newsletter integration
- Social sharing
- Related posts
- Reading time estimation
- Table of contents for long posts

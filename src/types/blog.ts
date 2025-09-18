import type { PortableTextBlock } from '@portabletext/types';

export interface Author {
  _id: string;
  name: string;
  slug?: {
    current: string;
  };
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  bio?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  description?: string;
}

// Table types
export interface TableCell {
  content: PortableTextBlock[][]; // Array of block arrays for cell content
  isHeader: boolean;
}

export interface TableRow {
  cells: TableCell[];
}

export interface Table {
  _type: 'table';
  rows: TableRow[];
  caption?: string;
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: {
    current: string;
  };
  author?: Author;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  categories?: Category[];
  publishedAt: string;
  body: PortableTextBlock[]; // Portable text content
  excerpt?: string;
}

export interface PostPreview {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author?: {
    name: string;
  };
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  publishedAt: string;
  excerpt?: string;
}

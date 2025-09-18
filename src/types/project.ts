import type { PortableTextBlock } from '@portabletext/types';

export interface ProjectCategory {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  description?: string;
  icon?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  color?: string;
}

export interface ProjectTechnology {
  _id: string;
  name: string;
  slug?: {
    current: string;
  };
  category: string;
  icon?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  description?: string;
  website?: string;
}

export interface ProjectFeature {
  title: string;
  description?: string;
}

export interface ProjectImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  caption?: string;
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
}

export interface Project {
  _id: string;
  _type: 'project';
  title: string;
  slug: {
    current: string;
  };
  client?: string;
  projectType: string;
  excerpt: string;
  description: PortableTextBlock[];
  challenge?: PortableTextBlock[];
  solution?: PortableTextBlock[];
  features?: ProjectFeature[];
  mainImage: ProjectImage;
  gallery?: ProjectImage[];
  projectUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  categories: ProjectCategory[];
  technologies: ProjectTechnology[];
  startDate?: string;
  endDate?: string;
  status: string;
  featured: boolean;
  order?: number;
}

export interface ProjectPreview {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  client?: string;
  projectType: string;
  excerpt: string;
  mainImage: ProjectImage;
  categories: ProjectCategory[];
  technologies: ProjectTechnology[];
  status: string;
  featured: boolean;
  order?: number;
}

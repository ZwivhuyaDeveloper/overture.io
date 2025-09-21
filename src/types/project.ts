import type { PortableTextBlock } from '@portabletext/types';

export interface ProjectContributor {
  _id: string;
  _type: 'projectContributor';
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
  bio?: PortableTextBlock[];
  role?: string;
  skills?: string[];
  website?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

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
  leadContributor?: ProjectContributor;
  teamExpertise?: ProjectContributor[];
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
  expertContributors?: ProjectContributor[];
  implementationTeam?: ProjectContributor[];
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
  contributors: ProjectContributor[];
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
  contributors: ProjectContributor[];
  status: string;
  featured: boolean;
  order?: number;
}

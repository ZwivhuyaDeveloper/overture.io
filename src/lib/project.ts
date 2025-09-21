/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Project, ProjectPreview, ProjectCategory, ProjectTechnology } from '@/types/project';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Query for getting all projects with basic info for listing
export const projectsQuery = `
  *[_type == "project"] | order(order asc, featured desc, startDate desc) {
    _id,
    title,
    slug,
    client,
    projectType,
    excerpt,
    cardDescription,
    mainImage,
    categories[]->{
      _id,
      title,
      slug,
      description,
      color
    },
    technologies[]->{
      _id,
      name,
      slug,
      category,
      icon
    },
    status,
    featured,
    order
  }
`;

// Query for getting a single project by slug with full content
export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    client,
    projectType,
    excerpt,
    cardDescription,
    description,
    challenge,
    solution,
    features,
    mainImage {
      ...,
      asset-> {
        _id,
        url
      }
    },
    gallery[] {
      ...,
      asset-> {
        _id,
        url
      }
    },
    projectUrl,
    githubUrl,
    demoUrl,
    categories[]->{
      _id,
      title,
      slug,
      description,
      icon,
      color
    },
    technologies[]->{
      _id,
      name,
      slug,
      category,
      icon,
      description,
      website
    },
    startDate,
    endDate,
    status,
    featured,
    order
  }
`;

// Query for getting all project categories
export const projectCategoriesQuery = `
  *[_type == "projectCategory"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon,
    color
  }
`;

// Query for getting all project technologies
export const projectTechnologiesQuery = `
  *[_type == "projectTechnology"] | order(name asc) {
    _id,
    name,
    slug,
    category,
    icon,
    description,
    website
  }
`;

// Query for getting all projects slugs for static generation
export const projectsSlugsQuery = `
  *[_type == "project"] {
    "params": {
      "slug": slug.current
    }
  }
`;

// Query for getting featured projects
export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(order asc, startDate desc) {
    _id,
    title,
    slug,
    client,
    projectType,
    excerpt,
    mainImage,
    categories[]->{
      _id,
      title,
      slug,
      description,
      color
    },
    technologies[]->{
      _id,
      name,
      slug,
      category,
      icon
    },
    status,
    featured,
    order
  }
`;

// Get all projects for listing
export async function getAllProjects(): Promise<ProjectPreview[]> {
  const projects = await client.fetch(projectsQuery);
  return projects;
}

// Get a single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = await client.fetch(projectBySlugQuery, { slug });
  return project;
}

// Get all project categories
export async function getAllProjectCategories(): Promise<ProjectCategory[]> {
  const categories = await client.fetch(projectCategoriesQuery);
  return categories;
}

// Get all project technologies
export async function getAllProjectTechnologies(): Promise<ProjectTechnology[]> {
  const technologies = await client.fetch(projectTechnologiesQuery);
  return technologies;
}

// Get all projects slugs for static generation
export async function getAllProjectsSlugs() {
  const slugs = await client.fetch(projectsSlugsQuery);
  return slugs;
}

// Get featured projects
export async function getFeaturedProjects(limit?: number): Promise<ProjectPreview[]> {
  const query = limit ? `${featuredProjectsQuery} [0...$limit]` : featuredProjectsQuery;
  const projects = await client.fetch(query, { limit });
  return projects;
}

// Get projects by category
export async function getProjectsByCategory(categorySlug: string): Promise<ProjectPreview[]> {
  const query = `
    *[_type == "project" && categories[]->slug.current == $categorySlug] | order(order asc, featured desc, startDate desc) {
      _id,
      title,
      slug,
      client,
      projectType,
      excerpt,
      mainImage,
      categories[]->{
        _id,
        title,
        slug,
        description,
        color
      },
      technologies[]->{
        _id,
        name,
        slug,
        category,
        icon
      },
      status,
      featured,
      order
    }
  `;
  const projects = await client.fetch(query, { categorySlug });
  return projects;
}

// Get projects by technology
export async function getProjectsByTechnology(technologySlug: string): Promise<ProjectPreview[]> {
  const query = `
    *[_type == "project" && technologies[]->slug.current == $technologySlug] | order(order asc, featured desc, startDate desc) {
      _id,
      title,
      slug,
      client,
      projectType,
      excerpt,
      mainImage,
      categories[]->{
        _id,
        title,
        slug,
        description,
        color
      },
      technologies[]->{
        _id,
        name,
        slug,
        category,
        icon
      },
      status,
      featured,
      order
    }
  `;
  const projects = await client.fetch(query, { technologySlug });
  return projects;
}

// Get projects by status
export async function getProjectsByStatus(status: string): Promise<ProjectPreview[]> {
  const query = `
    *[_type == "project" && status == $status] | order(order asc, featured desc, startDate desc) {
      _id,
      title,
      slug,
      client,
      projectType,
      excerpt,
      mainImage,
      categories[]->{
        _id,
        title,
        slug,
        description,
        color
      },
      technologies[]->{
        _id,
        name,
        slug,
        category,
        icon
      },
      status,
      featured,
      order
    }
  `;
  const projects = await client.fetch(query, { status });
  return projects;
}

// Get recent projects (excluding current project)
export async function getRecentProjects(currentProjectId?: string, limit = 3): Promise<ProjectPreview[]> {
  const query = `
    *[_type == "project" && _id != $currentProjectId] | order(order asc, featured desc, startDate desc) [0...$limit] {
      _id,
      title,
      slug,
      client,
      projectType,
      excerpt,
      mainImage,
      categories[]->{
        _id,
        title,
        slug,
        description,
        color
      },
      technologies[]->{
        _id,
        name,
        slug,
        category,
        icon
      },
      status,
      featured,
      order
    }
  `;
  const projects = await client.fetch(query, { currentProjectId, limit });
  return projects;
}

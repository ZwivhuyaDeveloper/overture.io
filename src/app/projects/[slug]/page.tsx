import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/project';
import { NavMenu } from '@/components/layout/nav-menu';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Overture Agency Projects`,
    description: project.excerpt || `View ${project.title} project by Overture Agency`,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavMenu />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {project.excerpt}
          </p>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          Project detail component will be implemented here.
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { getAllProjectsSlugs } = await import('@/lib/project');
  const slugs = await getAllProjectsSlugs();
  return slugs;
}

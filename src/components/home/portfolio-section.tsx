'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { getAllProjects } from '@/lib/project';
import { HomeProjectCard } from './HomeProjectCard';
import { Tektur, Syncopate } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import type { ProjectPreview } from '@/types/project';

const tektur = Tektur({ weight: ['400', '700'], variable: '--font-tektur', subsets: ['latin'] })
const syncopate = Syncopate({ weight: ['400', '700'], variable: '--font-syncopate', subsets: ['latin'] })

export default function PortfolioSection() {
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await getAllProjects();
        // Take only the first 4 projects for the portfolio section
        setProjects(projectsData.slice(0, 4));
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      {/* Header Section */}
      <div className="w-full gap-4 flex flex-col items-center justify-center mb-20 max-w-7xl mx-auto">
        <div className="w-fit h-fit p-2 bg-zinc-200 rounded-full px-4">
          <h2 className={`${tektur.className} 
              tracking-widest relative text-left z-10 text-md sm:text-sm text-black`}>
              Portfolio  
          </h2>
        </div>
        <h1 className={`${syncopate.className} 
              tracking-widest relative text-center w-2xl z-10 text-md sm:text-xl font-bold text-black`}>
              Our Portfolio: projects that speak for themselves
        </h1>
      </div>

      {/* Projects Grid */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline"
              className="text-black border-black hover:bg-black hover:text-white"
            >
              Try Again
            </Button>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects available at the moment.</p>
          </div>
        ) : (
          <div className='flex flex-col gap-8 w-full'>
            {/* First row - 2 projects */}
            <section className='flex flex-row items-center gap-2 justify-center w-full h-full'>
              {projects.slice(0, 2).map((project) => (
                <Link 
                  key={project._id} 
                  href={`/projects/${project.slug.current}`}
                  className="block w-full"
                >
                  <div className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <HomeProjectCard project={project} />
                  </div>
                </Link>
              ))}
            </section>
            
            {/* Second row - remaining 2 projects */}
            {projects.length > 2 && (
              <section className='flex flex-row items-center gap-1 justify-center w-full h-full'>
                {projects.slice(2, 4).map((project) => (
                  <Link 
                    key={project._id} 
                    href={`/projects/${project.slug.current}`}
                    className="block w-full"
                  >
                    <div className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <HomeProjectCard project={project} />
                    </div>
                  </Link>
                ))}
              </section>
            )}
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button 
              variant="outline" 
              className="text-black border-black hover:bg-black hover:text-white group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

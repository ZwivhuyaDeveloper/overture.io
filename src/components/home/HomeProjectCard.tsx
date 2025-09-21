"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { urlFor } from '@/lib/project';
import type { ProjectPreview } from '@/types/project';
import { Tektur, Syncopate, Afacad } from 'next/font/google';

const tektur = Tektur({ weight: ['400', '700'], variable: '--font-tektur', subsets: ['latin'] })
const syncopate = Syncopate({ weight: ['400', '700'], variable: '--font-syncopate', subsets: ['latin'] })
const afacad = Afacad({ weight: ['400', '700'], variable: '--font-afacad', subsets: ['latin'] })

interface HomeProjectCardProps {
  project: ProjectPreview;
}

export function HomeProjectCard({ project }: HomeProjectCardProps) {
  return (
    <div className='flex flex-col items-start h-full w-full justify-center'>
      <h1 className={`${tektur.className} tracking-wide py-2 relative text-left z-10 text-lg sm:text-lg text-black`}>
        <span className="text-primary font-bold">{project.title}</span> - {project.excerpt}
      </h1>
      <div className='grid grid-cols-2 items-center gap-2 h-full w-full justify-center'>
        <Card className="w-full h-full z-10 p-0 bg-transparent border-none shadow-none">
          {project.mainImage && (
            <Image 
              src={urlFor(project.mainImage).width(1000).height(1000).url()} 
              width={1000} 
              height={1000} 
              quality={100} 
              alt={project.mainImage.alt || project.title}
              className="object-cover w-full h-70 rounded-2xl"
            />
          )}
        </Card>
        <Card className='flex flex-col items-center w-full h-full justify-between rounded-3xl border-none bg-zinc-100 p-5 py-6'>
          <h1 className={`${syncopate.className} text-black text-left w-full font-bold text-xl capitalize`}>
            {project.title}
          </h1>
          <h2 className={`${afacad.className} text-black text-sm w-full capitalize`}>
            {project.excerpt}
          </h2>
          <div className='w-full h-fit flex items-center gap-2 justify-start flex-row'>
            <div className='w-8 h-8 rounded-3xl bg-zinc-300'/>
            <div>
              <h3 className='text-black text-xs font-medium'>
                {project.client || 'Client Name'}
              </h3>
              <h4 className='text-black text-xs font-medium'>
                {project.client ? 'CEO, Client Company' : 'Project Showcase'}
              </h4>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

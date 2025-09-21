"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { urlFor } from '@/lib/project';
import type { ProjectPreview } from '@/types/project';
import { Tektur, Syncopate, Afacad } from 'next/font/google';
import { PortableText } from 'next-sanity';

const tektur = Tektur({ weight: ['400', '700'], variable: '--font-tektur', subsets: ['latin'] })
const syncopate = Syncopate({ weight: ['400', '700'], variable: '--font-syncopate', subsets: ['latin'] })
const afacad = Afacad({ weight: ['400', '700'], variable: '--font-afacad', subsets: ['latin'] })

interface HomeProjectCardProps {
  project: ProjectPreview;
}

export function HomeProjectCard({ project }: HomeProjectCardProps) {
  return (
    <div className='flex flex-col items-start h-full w-full justify-center'>
      <h1 className='tracking-wide py-2 relative text-left z-10 text-lg sm:text-lg text-black'>
        <span className={`${syncopate.className} text-primary text-xl font-bold`}>{project.title}</span> - <span className={`${afacad.className} text-gray-500 font-regular tracking-tight text-xl`}>{project.excerpt}</span>
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
              className="object-fill w-full h-65 rounded-2xl"
            />
          )}
        </Card>
        <Card className='flex flex-col items-center w-full h-full pt-8 justify-between rounded-3xl border-none bg-zinc-100 p-5 py-6'>
          <h1 className={`${syncopate.className} text-black text-left w-full font-bold text-lg capitalize`}>
            {project.title}
          </h1>
          <div className='w-full h-fit flex items-center gap-2 justify-start flex-row'>
            <h2 className={`${afacad.className} text-gray-500 text-left text-md w-md`}>
              {project.cardDescription && <PortableText value={project.cardDescription} />}
            </h2>
          </div>
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

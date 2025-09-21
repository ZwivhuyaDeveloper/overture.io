import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectContributorType = defineType({
  name: 'projectContributor',
  title: 'Project Contributor',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Full name of the project contributor',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
      description: 'URL-friendly version of the name',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Profile photo of the contributor',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        }),
      ],
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
      description: 'Biography and background information about the contributor',
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'Primary role or title (e.g., Frontend Developer, UI/UX Designer, Project Manager)',
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'List of key skills or expertise areas',
    }),
    defineField({
      name: 'website',
      type: 'url',
      description: 'Personal website or portfolio URL',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'github',
      type: 'url',
      description: 'GitHub profile URL',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      description: 'LinkedIn profile URL',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'email',
      type: 'string',
      description: 'Contact email address',
      validation: (Rule) => Rule.email(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})

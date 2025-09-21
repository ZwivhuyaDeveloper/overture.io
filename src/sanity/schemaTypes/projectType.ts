import {CodeBlockIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      type: 'string',
      description: 'Client name or company',
    }),
    defineField({
      name: 'projectType',
      type: 'string',
      options: {
        list: [
          {title: 'Web Application', value: 'web'},
          {title: 'Mobile Application', value: 'mobile'},
          {title: 'E-commerce', value: 'ecommerce'},
          {title: 'Website', value: 'website'},
          {title: 'Web Platform', value: 'platform'},
          {title: 'API Development', value: 'api'},
          {title: 'Full Stack', value: 'fullstack'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      description: 'Brief project summary for preview cards',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'cardDescription',
      type: 'blockContent',
      description: 'Short description specifically for home project cards',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
      description: 'Detailed project description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      type: 'blockContent',
      description: 'Project challenges and problems solved',
    }),
    defineField({
      name: 'solution',
      type: 'blockContent',
      description: 'How the challenges were addressed',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        })
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Image caption',
            }),
          ],
        }),
      ],
      description: 'Additional project screenshots',
    }),
    defineField({
      name: 'projectUrl',
      type: 'url',
      description: 'Live project URL',
    }),
    defineField({
      name: 'githubUrl',
      type: 'url',
      description: 'GitHub repository URL',
    }),
    defineField({
      name: 'demoUrl',
      type: 'url',
      description: 'Demo video URL',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'projectCategory'}})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'projectTechnology'}})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'contributors',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'projectContributor'}})],
      description: 'Team members who contributed to this project',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      description: 'Project start date',
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      description: 'Project completion date',
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Planning', value: 'planning'},
          {title: 'On Hold', value: 'on-hold'},
        ],
      },
      initialValue: 'completed',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      description: 'Feature this project on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Display order for sorting',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      projectType: 'projectType',
      media: 'mainImage',
    },
    prepare(selection) {
      const {projectType} = selection
      return {
        ...selection,
        subtitle: projectType && `${projectType.charAt(0).toUpperCase() + projectType.slice(1)} Project`,
      }
    },
  },
})

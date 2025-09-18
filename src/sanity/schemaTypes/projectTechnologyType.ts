import {CodeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectTechnologyType = defineType({
  name: 'projectTechnology',
  title: 'Project Technology',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'Framework', value: 'framework'},
          {title: 'Library', value: 'library'},
          {title: 'Tool', value: 'tool'},
          {title: 'Platform', value: 'platform'},
          {title: 'Language', value: 'language'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Technology icon or logo',
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'Brief description of the technology',
    }),
    defineField({
      name: 'website',
      type: 'url',
      description: 'Official website URL',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
})

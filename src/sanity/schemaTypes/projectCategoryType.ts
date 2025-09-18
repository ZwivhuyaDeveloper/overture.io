import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectCategoryType = defineType({
  name: 'projectCategory',
  title: 'Project Category',
  type: 'document',
  icon: TagIcon,
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
      name: 'description',
      type: 'text',
      description: 'Brief description of the project category',
    }),
    defineField({
      name: 'icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional icon for the category',
    }),
    defineField({
      name: 'color',
      type: 'string',
      description: 'Hex color code for category theming (e.g., #3B82F6)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})

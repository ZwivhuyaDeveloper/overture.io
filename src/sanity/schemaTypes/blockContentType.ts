import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, DocumentIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    // Table object type
    defineArrayMember({
      type: 'object',
      name: 'table',
      title: 'Table',
      icon: DocumentIcon,
      fields: [
        {
          name: 'rows',
          type: 'array',
          title: 'Rows',
          of: [
            {
              type: 'object',
              name: 'row',
              title: 'Row',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  title: 'Cells',
                  of: [
                    {
                      type: 'object',
                      name: 'cell',
                      title: 'Cell',
                      fields: [
                        {
                          name: 'content',
                          type: 'array',
                          title: 'Cell Content',
                          of: [
                            {
                              type: 'block',
                              styles: [
                                {title: 'Normal', value: 'normal'},
                                {title: 'Bold', value: 'strong'},
                              ],
                              marks: {
                                decorators: [
                                  {title: 'Strong', value: 'strong'},
                                  {title: 'Emphasis', value: 'em'},
                                ],
                              },
                            }
                          ],
                          validation: (Rule) => Rule.required().min(1),
                        },
                        {
                          name: 'isHeader',
                          type: 'boolean',
                          title: 'Header Cell',
                          description: 'Check if this cell should be a header cell (th)',
                          initialValue: false,
                        },
                      ],
                      preview: {
                        select: {
                          content: 'content',
                          isHeader: 'isHeader',
                        },
                        prepare(selection) {
                          const {content, isHeader} = selection
                          const text = content?.[0]?.children?.[0]?.text || 'Empty cell'
                          return {
                            title: `${isHeader ? 'Header: ' : ''}${text}`,
                          }
                        },
                      },
                    },
                  ],
                  validation: (Rule) => Rule.required().min(1),
                },
              ],
              preview: {
                select: {
                  cells: 'cells',
                },
                prepare(selection) {
                  const {cells} = selection
                  return {
                    title: `Row with ${cells?.length || 0} cells`,
                  }
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Table Caption',
          description: 'Optional caption for the table',
        },
      ],
      preview: {
        select: {
          rows: 'rows',
          caption: 'caption',
        },
        prepare(selection) {
          const {rows, caption} = selection
          const rowCount = rows?.length || 0
          const cellCount = rows?.[0]?.cells?.length || 0
          return {
            title: `Table (${rowCount} × ${cellCount})`,
            subtitle: caption,
          }
        },
      },
    }),
  ],
})

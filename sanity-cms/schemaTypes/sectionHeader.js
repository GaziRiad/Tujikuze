import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'sectionHeader',
  title: 'Section Title Module',
  type: 'object', // Change this from 'array' to 'object'
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'sectionLink',
      title: 'Section Link',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Link Label',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'Link URL',
          type: 'string',
        }),
      ],
      preview: {
        prepare() {
          return {
            title: 'Section Link',
          }
        },
      },
    }),
    defineField({
      name: 'description',
      title: 'Section description',
      type: 'text',
    }),

    defineField({
      name: 'items',
      title: 'Text List',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'description',
              title: 'Text Item',
              type: 'text',
            }),
          ],
          preview: {
            prepare() {
              return {
                title: 'Text Item',
              }
            },
          },
        }),
      ],
    }),
  ],

  // 🎨 Customize how the Grid List appears in Sanity Studio
  preview: {
    prepare() {
      return {
        title: 'Section Title Module',
        media: DocumentTextIcon, // Default icon if no image
      }
    },
  },
})

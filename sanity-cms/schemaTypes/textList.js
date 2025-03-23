import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'textList',
  title: 'Text List Module',
  type: 'object', // Change this from 'array' to 'object'
  fields: [
    defineField({
      name: 'items',
      title: 'Grid Blocks',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Item Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Item Description',
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
        title: 'Text List Module',
        media: DocumentTextIcon, // Default icon if no image
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {ActivityIcon} from '@sanity/icons'

export default defineType({
  name: 'keyStats',
  title: 'Key Statistics Table',
  type: 'object', // Change from "array" to "object"
  fields: [
    defineField({
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [
        defineField({
          name: 'tableRow',
          type: 'object',
          title: 'Table Row',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
  // 🎨 Customize how the Grid List appears in Sanity Studio
  preview: {
    prepare() {
      return {
        title: 'Key Statics Module',
        media: ActivityIcon, // Default icon if no image
      }
    },
  },
})

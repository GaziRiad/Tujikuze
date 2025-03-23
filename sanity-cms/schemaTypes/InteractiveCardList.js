import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export default defineType({
  name: 'interactiveCardList',
  title: 'Interactive Card List Module',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  type: 'image', // Use 'image' directly
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                  description: 'Alternative text for the logo.',
                }),
              ],
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
        title: 'Interactive Card List Module',
        media: ThListIcon, // Default icon if no image
      }
    },
  },
})

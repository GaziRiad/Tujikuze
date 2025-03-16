import {defineField, defineType} from 'sanity'
import {DocumentIcon, OlistIcon} from '@sanity/icons'

export default defineType({
  name: 'cardList',
  title: 'card List Module',
  type: 'object', // Change this from 'array' to 'object'
  fields: [
    defineField({
      name: 'items',
      title: 'Grid Items',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Item Name',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Item Description',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Item Image',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                  description: 'Alternative text for the image.',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image.image',
            },
            prepare({title, media}) {
              return {
                title: title || 'Grid Item',
                media: media || DocumentIcon, // Default icon if no image
              }
            },
          },
        }),
      ],
    }),
  ],

  // 🎨 Customize how the Grid List appears in Sanity Studio
  preview: {
    prepare({title, media}) {
      return {
        title: title || 'Grid List',
        media: media || OlistIcon, // Default icon if no image
      }
    },
  },
})

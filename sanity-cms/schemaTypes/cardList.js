import {defineField, defineType} from 'sanity'
import {DocumentIcon, OlistIcon} from '@sanity/icons'

export default defineType({
  name: 'cardList',
  title: 'Card List Module',
  type: 'object',
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
                media: media || DocumentIcon,
              }
            },
          },
        }),
      ],
    }),

    // Dropdown for selecting the number of columns
    defineField({
      name: 'columns',
      title: 'Number of Columns',
      type: 'number',
      options: {
        list: [
          {title: '2 Columns', value: 2},
          {title: '3 Columns', value: 3},
          {title: '4 Columns', value: 4},
        ],
        layout: 'dropdown', // Ensures it's a dropdown
      },
      initialValue: 3, // Default to 3 columns
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare({title, media}) {
      return {
        title: title || 'Grid List',
        media: media || OlistIcon,
      }
    },
  },
})

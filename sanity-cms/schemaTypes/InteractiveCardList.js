import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'interactiveCardList',
  title: 'Interactive Card List Module',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Heading Title',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Heading Link (Optional)',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Link Label',
              type: 'string',
            }),
            defineField({
              name: 'linkUrl',
              title: 'Link URL',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'mainText',
      title: 'Main Text',
      type: 'string',
    }),
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
})

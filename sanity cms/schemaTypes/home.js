import {defineField} from 'sanity'

export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        // Credits Section
        defineField({
          name: 'heroImages',
          type: 'array',
          title: 'Hero Section Images',
          of: [
            defineField({
              type: 'image', // Use 'image' directly
              title: 'Hero Image',
              options: {
                hotspot: true,
              },
              fields: [
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
        defineField({
          name: 'heroContent',
          type: 'array',
          title: 'Hero Section Text Content',
          of: [
            defineField({
              name: 'heroText',
              type: 'string',
              title: 'Text',
              description: 'Text for the hero section.',
            }),
          ],
        }),
      ],
    }),
  ],
}

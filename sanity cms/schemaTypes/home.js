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
    defineField({
      name: 'blockSections',
      title: 'Pages Blocks Sections',
      type: 'array',
      of: [
        defineField({
          name: 'blockSection',
          title: 'Page Block Section',
          type: 'object',
          fields: [
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
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'subTitle',
              title: 'SubTitle',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
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
            defineField({
              name: 'text',
              title: 'Text (appears when link is hovered)',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (bellow pages blocks)',
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
}

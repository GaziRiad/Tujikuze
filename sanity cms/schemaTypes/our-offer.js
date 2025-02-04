import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'our-offer',
  title: 'Our Offer Page',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Text Content',
          type: 'text',
        }),
        defineField({
          name: 'image',
          title: 'Intro Section Image',
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
    defineField({
      name: 'materialsAndCraftsmanshipSection',
      title: 'Materials & Craftsmanship Section',
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
              title: 'Heading Link',
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
          title: 'Main Text Content',
          type: 'text',
        }),
        defineField({
          name: 'textContent',
          title: 'Secondary Text Content',
          type: 'array',
          of: [
            defineField({
              name: 'text',
              title: 'Text Content',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineType({
      name: 'craftsmanshipSection',
      title: 'Craftsmanship Tab Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
          title: 'Section Heading',
          description: 'text for the section heading (H2).',
        }),
        defineType({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            defineType({
              name: 'item',
              title: 'Craftsmanship Item',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                  title: 'Item name',
                }),
                defineField({
                  name: 'description',
                  title: 'Item description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Item Image',
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
    }),
    defineType({
      name: 'materialsSection',
      title: 'materials Tab Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
          title: 'Section Heading',
          description: 'text for the section heading (H2).',
        }),
        defineType({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            defineType({
              name: 'item',
              title: 'Material Item',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                  title: 'Item name',
                }),
                defineField({
                  name: 'description',
                  title: 'Item description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Item Image',
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
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (bellow materials)',
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
    defineType({
      name: 'termsSection',
      title: 'Terms of Trade Section',
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
          name: 'topFeatures',
          title: 'Features Content (top of image)',
          type: 'array',
          of: [
            defineField({
              name: 'feature',
              type: 'object',
              title: 'Feature',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Heading',
                  type: 'string',
                }),
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text',
                }),
              ],
            }),
          ],
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
        defineField({
          name: 'bottomFeatures',
          title: 'Features Content (bottom of image)',
          type: 'array',
          of: [
            defineField({
              name: 'feature',
              type: 'object',
              title: 'Feature',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Heading',
                  type: 'string',
                }),
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})

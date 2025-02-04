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
    defineField({
      name: 'materialsAndCraftsmanshipSection',
      title: 'Materials and Craftsmanship Section',
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
                  name: 'itemImage',
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
        defineField({
          name: 'materials',
          title: 'Materials',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Material Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Material Description',
                  type: 'string',
                }),
                defineField({
                  name: 'materialImage',
                  title: 'Material Image',
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
      name: 'casesSection',
      title: 'Case Studies Section in Home page',
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
          name: 'caseStudies',
          type: 'array',
          title: 'Case Studies',
          of: [
            {
              type: 'reference',
              to: [{type: 'case-study'}],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'blogSection',
      title: 'Blog Section in Home page',
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
      ],
    }),
  ],
}

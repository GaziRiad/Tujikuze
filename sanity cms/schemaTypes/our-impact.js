import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'our-impact',
  title: 'Our Impact Page',
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
      ],
    }),
    defineField({
      name: 'mainImage',
      type: 'array',
      title: 'Main Image',
      of: [
        defineField({
          type: 'image', // Use 'image' directly
          title: 'Image',
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
      name: 'highlightsSection',
      title: 'Impact Highlights Section',
      type: 'object',
      fields: [
        defineField({
          name: 'highlights',
          title: 'Highlights Content',
          type: 'array',
          of: [
            defineField({
              name: 'highlight',
              type: 'object',
              title: 'Highlight',
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
          name: 'keyStatsTable',
          title: 'Key Statistics Table',
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
        defineField({
          name: 'highlightImage',
          type: 'array',
          title: 'Highlight Section Image',
          of: [
            defineField({
              type: 'image', // Use 'image' directly
              title: 'Image',
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
      ],
    }),
    defineField({
      name: 'resultsSection',
      title: 'Results Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
          title: 'Section Heading',
          description: 'text for the section heading (H2).',
        }),
        defineField({
          name: 'text',
          title: 'Text Content',
          type: 'text',
        }),
        defineField({
          name: 'keyStatsTable',
          title: 'Key Statistics Table',
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
    }),
    defineField({
      name: 'esgSection',
      title: 'ESG Due Diligence Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
          title: 'Section Heading',
          description: 'text for the section heading (H2).',
        }),
        defineField({
          name: 'mainText',
          title: 'Main Text Content',
          type: 'text',
        }),
        defineField({
          name: 'textContent',
          title: 'Text Content',
          type: 'array',
          of: [{type: 'text'}], // No need for an object wrapper
        }),
        defineField({
          name: 'esgImage',
          type: 'array',
          title: 'ESG Section Image',
          of: [
            defineField({
              type: 'image', // Use 'image' directly
              title: 'Image',
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
      ],
    }),
  ],
})

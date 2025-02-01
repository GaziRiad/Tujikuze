import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About US Page',
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
      name: 'ourMission',
      title: 'Our Mission Section',
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
          title: 'text Content',
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
        defineField({
          name: 'missionImage',
          title: 'Our Mission Section Image',
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
    defineType({
      name: 'locationSection',
      title: 'Our Location Section',
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
          name: 'locationImage',
          title: 'Our Location Section Image',
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
    defineType({
      name: 'teamSection',
      title: 'Our Team Section',
      type: 'array',
      of: [
        defineType({
          name: 'teamMember',
          title: 'Team Member',
          type: 'object',
          fields: [
            defineField({
              name: 'fullname',
              type: 'string',
              title: 'Team member full name',
            }),
            defineField({
              name: 'description',
              title: 'Team member description',
              type: 'text',
            }),
            defineField({
              name: 'memberImage',
              title: 'Team member Image',
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
    defineType({
      name: 'ethicalFashionSection',
      title: 'Ethical Fashion Initiative Section',
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
          name: 'halfImage',
          title: 'Ethical Fashion Section Image',
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
          name: 'largeImage',
          title: 'Ethical Fashion Section Main Large Image',
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
})

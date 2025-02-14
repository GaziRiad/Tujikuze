import {defineField} from 'sanity'

export default defineField({
  name: 'contact',
  title: 'Contact Us Page',
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
      name: 'subHeading',
      type: 'text',
      title: 'Section Sub Heading (H2 Large text)',
    }),
    defineField({
      name: 'contactForm',
      title: 'Contact Form',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Form Title',
          type: 'string',
          description: 'Title of the contact form',
        }),
        defineField({
          name: 'fields',
          title: 'Form Fields',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Field Type',
                  type: 'string',
                  options: {
                    list: ['text', 'email', 'textarea', 'select'],
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'placeholder',
                  title: 'Placeholder Text',
                  type: 'string',
                }),
                defineField({
                  name: 'required',
                  title: 'Required',
                  type: 'boolean',
                  initialValue: false,
                }),
                defineField({
                  name: 'options',
                  title: 'Options (For Select Fields)',
                  type: 'array',
                  of: [{type: 'string'}],
                  hidden: ({parent}) => parent?.type !== 'select',
                }),
              ],
              preview: {
                select: {
                  placeholder: 'placeholder',
                  type: 'type',
                },
                prepare({placeholder, type}) {
                  return {
                    title: placeholder || `(No placeholder)`,
                    subtitle: `Type: ${type}`,
                  }
                },
              },
            },
          ],
        }),
        defineField({
          name: 'buttonLabel',
          type: 'string',
          title: 'Button Label',
          description: 'Label for the submit button.',
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image', // Use 'image' directly
      title: 'Contact Us Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for the page.',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
      ],
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
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
})

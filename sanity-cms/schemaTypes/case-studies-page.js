import {defineField} from 'sanity'

export default defineField({
  name: 'case-studies-page',
  title: 'Case Studies Page',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Main Text',
      type: 'text',
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

  preview: {
    select: {
      title: 'seo.title',
    },
  },
})

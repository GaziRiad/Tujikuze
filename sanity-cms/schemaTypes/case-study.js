import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'case-study',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Case Study Image',
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
          description: 'Alternative text.',
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    // New field for uploading a report file
    defineField({
      name: 'reportFile',
      title: 'Report File',
      type: 'file', // File upload type
      options: {
        accept: '.pdf,.doc,.docx', // Specify accepted file types
      },
      description: 'Upload the case study report file (PDF, DOC, or DOCX)',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})

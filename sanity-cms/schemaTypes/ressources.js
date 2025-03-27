import {defineField} from 'sanity'

export default defineField({
  name: 'ressourcesPage',
  title: 'Ressources Page',
  type: 'object',
  fields: [
    defineField({
      name: 'casesSection',
      title: 'Case Studies Section in Home page',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionHeading',
          title: 'Section Heading (Optional)',
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

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'our-offer',
  title: 'Our Offer Page',
  type: 'document',
  fields: [
    {
      name: 'modules',
      title: 'Page Modules',
      type: 'array',
      of: [
        {type: 'sectionHeader'},
        {type: 'hero'},
        {type: 'ctaModule'},
        {type: 'mediaModule'},
        {type: 'cardList'},
        {type: 'interactiveCardList'},
        {type: 'editorial'},
        {type: 'textList'},
        {type: 'keyStats'},
        {type: 'casesModule'},
        {type: 'blogModule'},
        {type: 'footer'},
      ],
    },
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

import {defineField} from 'sanity'

export default {
  name: 'home',
  type: 'document',
  title: 'Home',
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
}

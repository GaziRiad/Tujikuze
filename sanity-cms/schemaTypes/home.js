import {defineField} from 'sanity'

export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    // defineField({
    //   name: 'hero',
    //   title: 'Hero Section',
    //   type: 'object',
    //   fields: [
    //     // Credits Section
    //     defineField({
    //       name: 'heroImages',
    //       type: 'array',
    //       title: 'Hero Section Images',
    //       of: [
    //         defineField({
    //           type: 'image', // Use 'image' directly
    //           title: 'Hero Image',
    //           options: {
    //             hotspot: true,
    //           },
    //           fields: [
    //             defineField({
    //               name: 'alt',
    //               type: 'string',
    //               title: 'Alt Text',
    //               description: 'Alternative text for the logo.',
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     defineField({
    //       name: 'heroContent',
    //       type: 'array',
    //       title: 'Hero Section Text Content',
    //       of: [
    //         defineField({
    //           name: 'heroText',
    //           type: 'string',
    //           title: 'Text',
    //           description: 'Text for the hero section.',
    //         }),
    //       ],
    //     }),
    //   ],
    // }),

    {
      name: 'modules',
      title: 'Page Modules',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'ctaModule'},
        {type: 'largeImage'},
        {type: 'cardList'},
        {type: 'interactiveCardList'},
        {type: 'editorial'},
        {type: 'blogModule'},
      ],
    },

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
    // defineField({
    //   name: 'blogSection',
    //   title: 'Blog Section in Home page',
    //   type: 'object',
    //   fields: [
    //     defineField({
    //       name: 'sectionHeading',
    //       title: 'Section Heading',
    //       type: 'object',
    //       fields: [
    //         defineField({
    //           name: 'title',
    //           title: 'Heading Title',
    //           type: 'string',
    //         }),
    //         defineField({
    //           name: 'link',
    //           title: 'Heading Link (Optional)',
    //           type: 'object',
    //           fields: [
    //             defineField({
    //               name: 'label',
    //               title: 'Link Label',
    //               type: 'string',
    //             }),
    //             defineField({
    //               name: 'linkUrl',
    //               title: 'Link URL',
    //               type: 'string',
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     defineField({
    //       name: 'ressources',
    //       type: 'array',
    //       title: 'Ressources',
    //       of: [
    //         {
    //           type: 'reference',
    //           to: [{type: 'post'}],
    //         },
    //       ],
    //       validation: (Rule) => Rule.required().min(1),
    //     }),
    //   ],
    // }),
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

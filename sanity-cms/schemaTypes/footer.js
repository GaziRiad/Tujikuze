import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
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
      type: 'string',
      title: 'Section Sub Heading (H2 Large text)',
      description: 'text for the footer section sub heading.',
    }),
    // Credits Section
    defineField({
      name: 'credits',
      type: 'array',
      title: 'Credits',
      of: [
        defineField({
          type: 'object',
          title: 'Credit Item',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'text',
              type: 'text',
              title: 'Text',
            }),
          ],
        }),
      ],
    }),
    // Newsletter Section
    defineField({
      name: 'newsletter',
      type: 'object',
      title: 'Newsletter',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          description: 'Title for the newsletter section.',
        }),
        defineField({
          name: 'placeholder',
          type: 'string',
          title: 'Placeholder',
          description: 'Placeholder text for the email input field.',
        }),
        defineField({
          name: 'buttonLabel',
          type: 'string',
          title: 'Button Label',
          description: 'Label for the newsletter button.',
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image', // Use 'image' directly instead of wrapping in an object with 'asset'
      title: 'Footer Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for the image.',
        }),
      ],
    }),
    // Navigation Links
    defineField({
      name: 'navigationLinks',
      type: 'array',
      title: 'Navigation Links',
      of: [
        defineField({
          type: 'object',
          title: 'Navigation Link',
          fields: [
            defineField({
              name: 'link',
              type: 'string',
              title: 'Link',
              description: 'Name of the link (e.g., Privacy Policy).',
            }),
            defineField({
              name: 'url',
              type: 'string',
              title: 'URL',
              description: 'Link to the page.',
            }),
          ],
        }),
      ],
    }),
    // Social Links
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        defineField({
          type: 'object',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              title: 'Platform',
              description: 'Social media platform name (e.g., Instagram, Facebook).',
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL',
              description: 'Link to the social media platform.',
            }),
          ],
        }),
      ],
    }),
    // Footer Logos
    defineField({
      name: 'footerLogos',
      type: 'array',
      title: 'Footer Logos',
      of: [
        defineField({
          type: 'image', // Use 'image' directly
          title: 'Footer Logo',
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
    // Main Logo
    defineField({
      name: 'mainLogo',
      type: 'image', // Use 'image' directly
      title: 'Main Logo',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for the main logo.',
        }),
      ],
    }),
  ],
})

import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export default defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
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
      name: 'mainImage',
      type: 'image', // Use 'image' directly
      title: 'Main Footer Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for the main footer image.',
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
  // 🎨 Customize how the Grid List appears in Sanity Studio
  preview: {
    prepare() {
      return {
        title: 'Footer Module',
        media: ComponentIcon, // Default icon if no image
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons' // Import an icon

export default defineType({
  name: 'ctaModule',
  title: 'Call To Action Module',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
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
          description: 'Alternative text for the logo.',
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
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
    defineField({
      name: 'text',
      title: 'Text (appears when link is hovered)',
      type: 'text',
    }),
  ],
  // 🎨 Customize how this object appears in the list
  preview: {
    prepare() {
      return {
        title: 'Call To Action Module', // Fallback if no title
        media: DocumentTextIcon, // Default icon if no image
      }
    },
  },
})

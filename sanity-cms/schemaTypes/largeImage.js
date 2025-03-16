import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'largeImage',
  title: 'Large Image Module',
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
  // 🎨 Customize how this object appears in the list
  preview: {
    prepare() {
      return {
        title: 'Full Section Image', // Fallback if no title
        media: ImageIcon, // Default icon if no image
      }
    },
  },
})

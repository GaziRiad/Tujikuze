import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    // Credits Section
    defineField({
      name: 'images',
      type: 'array',
      title: 'Hero Section Images',
      of: [
        defineField({
          type: 'image', // Use 'image' directly
          title: 'Hero Image',
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
  ],
  // 🎨 Customize how this object appears in the list
  preview: {
    prepare() {
      return {
        title: 'Hero Module', // Fallback if no title
        media: ImagesIcon, // Default icon if no image
      }
    },
  },
})

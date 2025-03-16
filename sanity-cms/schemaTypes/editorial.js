import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'editorial',
  title: 'Editorial Module (H2)',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
    }),
  ],
  // 🎨 Customize how this object appears in the list
  preview: {
    prepare() {
      return {
        title: 'Editorial (H2)', // Fallback if no title
        media: BlockContentIcon, // Default icon if no image
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'

export default defineType({
  name: 'blogModule',
  title: 'Blog Module',
  type: 'object',
  fields: [
    defineField({
      name: 'ressources',
      type: 'array',
      title: 'Ressources',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  // 🎨 Customize how this object appears in the list
  preview: {
    prepare() {
      return {
        title: 'Ressources Module', // Fallback if no title
        media: FolderIcon, // Default icon if no image
      }
    },
  },
})

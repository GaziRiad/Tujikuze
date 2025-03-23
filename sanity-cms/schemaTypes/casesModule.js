import {defineField, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'

export default defineType({
  name: 'casesModule',
  title: 'Case Studies Module',
  type: 'object',
  fields: [
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
  // 🎨 Customize how this object appears in the list
  preview: {
    prepare() {
      return {
        title: 'Case Studies Module', // Fallback if no title
        media: FolderIcon, // Default icon if no image
      }
    },
  },
})

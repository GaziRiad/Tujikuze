import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'mediaModule', // Renamed from 'largeImage' to 'mediaModule'
  title: 'Media Module',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Media Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'Alternative text for the image.',
    }),
    defineField({
      name: 'imageRatio',
      title: 'Image Ratio',
      type: 'string',
      initialValue: '16:9', // Default selection
      options: {
        list: [
          {title: 'Full size (16:9)', value: '16:9'},
          {title: 'Half size media (1:1)', value: '1:1'},
        ],
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    select: {
      media: 'image',
      imageRatio: 'imageRatio',
    },
    prepare({media, imageRatio}) {
      return {
        title: `Media Module (${imageRatio || '16:9'})`, // Show ratio in preview
        media: media || ImageIcon,
      }
    },
  },
})

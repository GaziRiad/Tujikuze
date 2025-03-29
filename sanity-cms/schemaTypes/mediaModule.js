import {defineField, defineType} from 'sanity'
import {ImageIcon, PlayIcon} from '@sanity/icons'

export default defineType({
  name: 'mediaModule',
  title: 'Media Module',
  type: 'object',
  fields: [
    defineField({
      name: 'isVideo',
      type: 'boolean',
      title: 'Is this a Vimeo Video?',
      initialValue: false,
    }),
    defineField({
      name: 'vimeoId',
      type: 'string',
      title: 'Vimeo Video ID',
      description: 'Enter the ID from the Vimeo URL (e.g., 123456789).',
      hidden: ({parent}) => !parent?.isVideo, // Only show when video is selected
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Media Image',
      options: {hotspot: true},
      hidden: ({parent}) => parent?.isVideo, // Hide if video is selected
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'Alternative text for the image.',
      hidden: ({parent}) => parent?.isVideo, // Hide if video is selected
    }),
    defineField({
      name: 'imageRatio',
      title: 'Image Ratio',
      type: 'string',
      initialValue: '16:9',
      options: {
        list: [
          {title: 'Full size (16:9)', value: '16:9'},
          {title: 'Half size media (1:1)', value: '1:1'},
        ],
        layout: 'dropdown',
      },
      hidden: ({parent}) => parent?.isVideo, // Hide if video is selected
    }),
  ],
  preview: {
    select: {
      media: 'image',
      vimeoId: 'vimeoId',
      isVideo: 'isVideo',
      imageRatio: 'imageRatio',
    },
    prepare({media, vimeoId, isVideo, imageRatio}) {
      return {
        title: isVideo ? `Vimeo Video (${vimeoId})` : `Media Module (${imageRatio || '16:9'})`,
        media: isVideo ? PlayIcon : media || ImageIcon,
      }
    },
  },
})

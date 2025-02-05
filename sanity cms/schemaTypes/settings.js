import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Settings', // Assuming 'en' is your default language
        subtitle: 'Settings Content',
      }
    },
  },
  fields: [
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'defaultTitle',
      title: 'Site Default Title',
      type: 'string',
      initialValue: 'Welcome — Tujikuze',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'string',
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'navItems',
          title: 'Navigation Items',
          type: 'array',
          of: [
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
          ],
        }),
      ],
    }),
  ],
})

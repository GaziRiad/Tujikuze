export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
      name: 'credits',
      type: 'array',
      title: 'Credits',
      of: [{type: 'block'}],
      description: 'Add the credit text here.',
    },
    {
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Describe the image for accessibility purposes.',
            },
          ],
        },
      ],
      description: 'Upload logos displayed in the footer.',
    },
    {
      name: 'newsletter',
      type: 'object',
      title: 'Newsletter',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          description: 'Title above the email input field.',
        },
        {
          name: 'placeholder',
          type: 'string',
          title: 'Input Placeholder',
          description: 'Placeholder text for the email input field.',
        },
        {
          name: 'buttonText',
          type: 'string',
          title: 'Button Text',
          description: 'Text displayed on the join button.',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'object',
          title: 'Social Link',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description: 'Name of the social platform (e.g., Instagram).',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              description: 'Link to the social platform.',
            },
          ],
        },
      ],
    },
    {
      name: 'navigationLinks',
      type: 'array',
      title: 'Navigation Links',
      of: [
        {
          type: 'object',
          title: 'Navigation Link',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description: 'Name of the link (e.g., Privacy Policy).',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              description: 'Link URL.',
            },
          ],
        },
      ],
    },
    {
      name: 'footerImage',
      type: 'image',
      title: 'Footer Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the image for accessibility purposes.',
        },
      ],
    },
  ],
}

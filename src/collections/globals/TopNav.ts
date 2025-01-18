import { GlobalConfig } from 'payload'

export const TopNav: GlobalConfig = {
  slug: 'nav',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
      ],
    },
  ],
}

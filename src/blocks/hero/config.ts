import type { Block } from 'payload'

export const HeroBlock: Block = {
  // ...
  slug: 'projects',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: false,
    },
    {
      name: 'projects',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'projectTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'projectDescription',
          type: 'textarea',
          required: true,
        },
        {
          name: 'projectImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      minRows: 1,
    },
  ],
  interfaceName: 'ProjectsBlock',
}

import type { Block } from 'payload'

export const ProjectsBlock: Block = {
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
          required: false,
        },
        {
          name: 'projectImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  interfaceName: 'ProjectsBlock',
}

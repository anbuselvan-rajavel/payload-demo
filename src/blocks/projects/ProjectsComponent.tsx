import { Media, ProjectsBlock } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string
} & ProjectsBlock

export const ProjectsComponent: React.FC<Props> = ({
  className,
  heading,
  subheading,
  projects,
}) => {
  const isMedia = (media: number | Media): media is Media => {
    return typeof media === 'object' && media !== null && 'url' in media
  }

  return (
    <div className={`relative bg-white py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{heading}</h2>
        {subheading && <p className="text-lg text-center mb-16">{subheading}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {project.projectImage && isMedia(project.projectImage) && (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.projectImage.url || '/fallback-image.jpg'}
                    alt={project.projectImage.alt || project.projectTitle}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.projectTitle}</h3>
                <p className="text-gray-600">{project.projectDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent

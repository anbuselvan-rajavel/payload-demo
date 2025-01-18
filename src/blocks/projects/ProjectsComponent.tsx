import { HeroBlock, Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string
} & HeroBlock

export const ProjectsComponent: React.FC<Props> = ({ className, heading, description, media }) => {
  const isMedia = (media: number | Media): media is Media => {
    return media !== undefined && (media as Media).url !== undefined
  }

  return (
    <div className={`relative text-white min-h-[100vh] ${className}`}>
      {media && isMedia(media) && (
        <Image
          src={media.url || ''}
          alt={media.alt || 'Background Image'}
          fill
          priority
          className="object-cover"
          quality={90}
        />
      )}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 max-w-6xl mx-auto py-72">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{heading}</h1>
        <p className="text-lg max-w-2xl">{description}</p>
      </div>
    </div>
  )
}

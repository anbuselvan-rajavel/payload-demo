import { Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

type ServiceCard = {
  id?: string
  image: number | Media
}

type Props = {
  className?: string
  heading: string
  subheading?: string
  serviceCards: ServiceCard[]
}

export const ServicesComponent: React.FC<Props> = ({
  className,
  heading,
  subheading,
  serviceCards,
}) => {
  const isMedia = (media: number | Media): media is Media => {
    return typeof media === 'object' && media !== null && 'url' in media
  }

  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{heading}</h2>
        {subheading && <p className="text-xl text-gray-600 text-center mb-16">{subheading}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards?.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {card.image && isMedia(card.image) && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={card.image.url || ''}
                    alt={card.image.alt || 'Service image'}
                    fill
                    className="object-cover"
                    priority={false}
                    quality={85}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

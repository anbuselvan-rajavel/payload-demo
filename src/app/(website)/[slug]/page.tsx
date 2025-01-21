import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Page as PageType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/renderBlocks'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })
  console.log(pages, 'pages')

  const params = pages.docs
    ?.filter((doc) => doc.slug && typeof doc.slug === 'string')
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = params

  const page: PageType | null = await queryPageBySlug({
    slug,
  })

  if (!page) {
    notFound()
  }

  const layout = page?.layout || []

  return (
    <article>
      <RenderBlocks blocks={layout} />
    </article>
  )
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
import { notFound as nextNotFound } from 'next/navigation'

function notFound() {
  nextNotFound()
}

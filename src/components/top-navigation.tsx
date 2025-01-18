import Link from 'next/link'
import React from 'react'
import { Media, Nav, Page } from '@/payload-types'
import Image from 'next/image'

type Props = {
  navBar: Nav
}

export default function TopNavigation({ navBar }: Props) {
  const logo = navBar?.logo as Media
  return (
    <div className="container mx-auto p-6 flex justify-between items-center">
      {logo?.url && logo?.alt ? (
        <Image src={logo.url} alt={logo.alt} width={36} height={50} />
      ) : (
        <div>No logo available</div>
      )}
      <nav>
        <ul className="flex gap-4">
          {navBar?.items.map((item) => {
            const page = item.page as Page
            if (typeof page === 'object' && 'slug' in page) {
              return (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>{page.title}</Link>
                </li>
              )
            }
            return null
          })}
        </ul>
      </nav>
    </div>
  )
}

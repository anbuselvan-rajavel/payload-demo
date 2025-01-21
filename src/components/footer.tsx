import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer as FooterType, Media, Page } from '@/payload-types'

type Props = {
  footer: FooterType
}

export default function Footer({ footer }: Props) {
  const logo = footer?.logo as Media

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            {logo?.url && (
              <Image
                src={logo.url}
                alt={logo.alt || 'Footer Logo'}
                width={120}
                height={40}
                className="mb-4"
              />
            )}
            <p className="text-gray-400">{footer.description}</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks?.map((item) => {
                const page = item.link as Page
                return (
                  <li key={page.id}>
                    <Link href={`/${page.slug}`} className="text-gray-400 hover:text-white">
                      {page.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footer.services?.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {footer.contact?.email && <li className="text-gray-400">{footer.contact.email}</li>}
              {footer.contact?.phone && <li className="text-gray-400">{footer.contact.phone}</li>}
              {footer.contact?.address && (
                <li className="text-gray-400">{footer.contact.address}</li>
              )}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          {footer.socialLinks?.map((link, index) => (
            <a key={index} href={link.url} className="text-gray-400 hover:text-white">
              {link.platform}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              {footer.copyright || `© ${new Date().getFullYear()} All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import './globals.css'
import TopNavigation from '@/components/top-navigation'
import Footer from '@/components/footer'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config: configPromise })

  const topNav = await payload.findGlobal({ slug: 'nav' })
  const footer = await payload.findGlobal({ slug: 'footer' })

  return (
    <html lang="en">
      <body>
        <main>
          <TopNavigation navBar={topNav} />
          {children}
          <Footer footer={footer} />
        </main>
      </body>
    </html>
  )
}

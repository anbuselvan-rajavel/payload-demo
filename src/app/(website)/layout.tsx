import { getPayload } from 'payload'
import configPromise from '@payload-config'
import './globals.css'
import TopNavigation from '@/components/top-navigation'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config: configPromise })

  const topNav = await payload.findGlobal({ slug: 'nav' })
  return (
    <html lang="en">
      <body>
        <main>
          <TopNavigation navBar={topNav} />
          {children}
        </main>
      </body>
    </html>
  )
}

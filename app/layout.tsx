import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Sidebar } from './components/Sidebar/Sidebar'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gradient-to-r from-slate-900 to-slate-700 to-black text-foreground ml-72">
        <main>
          <Sidebar/>
          {children}
        </main>
      </body>
    </html>
  )
}

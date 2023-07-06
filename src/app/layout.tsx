import './globals.css'
import { VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
const mainFont = VT323({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'John Vilela | Developer',
  description: 'Frontend developer based in São Paulo - Brazil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <main className="w-screen h-screen flex flex-col p-4 bg-stone-950 text-custom-green">
          <Navbar />

          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}

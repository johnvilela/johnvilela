import './globals.css'
import { VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Link from 'next/link'
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
          <nav className="flex items-center justify-center">
            <Link href="/" className=" text-3xl py-2 px-4 bg-custom-green text-stone-950 tracking-tighter absolute top-4 left-4">
              JV
            </Link>
            <Link href="/about" className="p-4 hover:bg-custom-green hover:text-stone-950 text-xl">
              About
            </Link>
            <Link href="/projects" className="p-4 hover:bg-custom-green hover:text-stone-950 text-xl">
              Projects
            </Link>
            <Link href="/contact" className="p-4 hover:bg-custom-green hover:text-stone-950 text-xl">
              Contact
            </Link>
          </nav>
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}

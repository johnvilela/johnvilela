import './globals.css'
import { VT323 } from 'next/font/google'

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
      <body className={mainFont.className}>{children}</body>
    </html>
  )
}

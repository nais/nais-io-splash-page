import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - nais',
    default: 'nais - smidighet for alle produktteam',
  },
  description:
    'nais er en plattform som lar produktteam fokusere på det som er viktigst, det å lage gode produkter, ikke å drifte plattformen.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

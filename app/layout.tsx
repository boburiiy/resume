import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boburbek Qadamov — Software Engineer',
  description: 'Boburbek Qadamov is a software engineer focused on backend development, Linux infrastructure, and DevOps with Python and Go.',
  generator: 'Next.js',
  openGraph: {
    title: 'Boburbek Qadamov — Software Engineer',
    description: 'Backend development, Linux infrastructure, and DevOps with Python and Go.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Boburbek Qadamov — Software Engineer',
    description: 'Backend development, Linux infrastructure, and DevOps with Python and Go.',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

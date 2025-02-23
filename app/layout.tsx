import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'QR code app',
  description: 'Generated for converting text to QR Code',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

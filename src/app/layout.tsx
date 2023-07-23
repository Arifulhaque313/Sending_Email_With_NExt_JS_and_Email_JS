import './globals.css'
import type { Metadata } from 'next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <div className=''>{children}</div>
      </body>
    </html>
  )
}

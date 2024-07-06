import type { Metadata, Viewport } from 'next'

import ThemeProvider from '@/themes/theme-provider'

// https://favicon.io/favicon-generator/
export const metadata: Metadata = {
  title: 'Cookbook',
  description: 'Save your recipes',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-es">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

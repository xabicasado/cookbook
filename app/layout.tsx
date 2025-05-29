import type { Metadata, Viewport } from 'next'

import ThemeProvider from '@/app/features/themes/theme-provider'

export const metadata: Metadata = {
  title: 'Cookbook',
  description: 'Guarda tus recetas',
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

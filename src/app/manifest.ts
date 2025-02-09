import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
  return {
    name: 'Cookbook',
    short_name: 'Cookbook',
    description: 'Save your cooking recipes!',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    dir: 'auto',
    lang: 'es-ES',
    start_url: '/',
    icons: [
      {
        src: '/icon1.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon2.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
        purpose: 'maskable',
      },
    ],
  }
}

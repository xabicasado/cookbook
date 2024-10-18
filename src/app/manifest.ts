import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
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
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
  }
}

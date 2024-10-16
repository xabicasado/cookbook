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
    orientation: 'any',
    dir: 'auto',
    lang: 'es-ES',
    start_url: '/',
    icons: [
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
  }
}

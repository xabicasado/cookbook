'use client'

import { Quicksand, Dancing_Script } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

const dancingScript = Dancing_Script({ subsets: ['latin'], display: 'swap' })

const theme = {
  colors: {
    text: '#000000',
    invertedText: '#ffffff',
    first: '#f95959',
    second: '#e3e3e3',
    third: '#233142',
    fourth: '#455d7a',
  },

  fonts: {
    quicksand: quicksand.style.fontFamily,
    dancingScript: dancingScript.style.fontFamily,
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
}

export default theme

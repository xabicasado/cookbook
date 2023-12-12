'use client'
// import { css } from 'styled-components'

import { Quicksand, Dancing_Script } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

const dancingScript = Dancing_Script({ subsets: ['latin'], display: 'swap' })

// const generateFontStyle = () => {
//   return css`
//     font-family: ${quicksand.style.fontFamily};
//   `
//   /* font-weight: ${font.style.fontWeight}; */
//   /* ${!!value.uppercase && `text-transform: uppercase`}; */
// }

const theme = {
  borderRadius: {
    none: '0px',
    m: '0.25rem',
    full: '3rem',
    /* rounded: '9999px', */
  },
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

  fontSize: {
    main: '3.5rem',
    h1: '1.5rem',
    h2: '1.25rem',
    // main: '3rem',
    // h1: '1.5rem'
    // h2: '1.25rem'
    // h3: '1.1rem',
    p: '1rem',
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

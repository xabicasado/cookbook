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
    s: '0.125rem',
    m: '0.25rem',
    l: '0.5rem',
    full: '9999px',
  },

  colors: {
    text: '#000000',
    invertedText: '#ffffff',

    primary: '#f95959',
    // primaryA: '#f95959',
    // primaryB: '#fa6e6e',
    // primaryC: '#fb8383',
    // primaryD: '#fb9797',
    // primaryE: '#fcacac',
    // primaryF: '#fdc1c1',
    // primaryG: '#fdd6d6',
    // primaryH: '#feeaea',

    secondary: '#e3e3e3',

    third: '#233142',
    // thirdA: '#233142',
    // thirdB: '#3f4b5a',
    // thirdC: '#5a6571',
    // thirdD: '#767e89',
    // thirdE: '#9198a1',
    // thirdF: '#adb2b8',
    // thirdG: '#c8cbd0',
    // thirdH: '#e4e5e7',

    fourth: '#455d7a',
    // fourthA: '#455d7a',
    // fourthB: '#5c718b',
    // fourthC: '#74859b',
    // fourthD: '#8b9aac',
    // fourthE: '#a2aebd',
    // fourthF: '#b9c2cd',
    // fourthG: '#d1d6de',
    // fourthH: '#e8ebee',
  },

  fonts: {
    quicksand: quicksand.style.fontFamily,
    dancingScript: dancingScript.style.fontFamily,
  },

  fontSize: {
    h1: '3.5rem',
    h2: '1.5rem',
    h3: '1.25rem',
    l: '1.1rem',
    m: '1rem',
    s: '0.9rem',
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

import { Dancing_Script, Lexend, Quicksand } from 'next/font/google'

import type { DefaultTheme } from 'styled-components'

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})
const dancingScript = Dancing_Script({ subsets: ['latin'], display: 'swap' })
const lexend = Lexend({ subsets: ['latin'], display: 'swap' })

const theme: DefaultTheme = {
  borderRadius: {
    none: '0px',
    s: '0.125rem',
    m: '0.25rem',
    l: '0.5rem',
    full: '9999px',
  },

  boxShadows: {
    level1: '0 1px 4px 0', // #f95959;',
    level2: '0 2px 8px 0', // #f95959;',
    level3: '0 8px 20px 0', // #f95959;',
    level4: '0 16px 32px 0', // #f95959;',
  },

  colors: {
    text: '#000000',
    textA: '#000000',
    textB: '#202020',
    textC: '#404040',
    textD: '#606060',
    textE: '#808080',
    textF: '#9f9f9f',
    textG: '#bfbfbf',
    textH: '#dfdfdf',

    invertedText: '#ffffff',
    disabledText: '#ffffff',

    primary: '#f95959',
    primaryA: '#f95959',
    primaryB: '#fa6e6e',
    primaryC: '#fb8383',
    primaryD: '#fb9797',
    primaryE: '#fcacac',
    primaryF: '#fdc1c1',
    primaryG: '#fdd6d6',
    primaryH: '#feeaea',

    complementaryOne: '#59f9a9',

    complementaryTwo: '#f9a959',

    complementaryThree: '#f9f959',
    complementaryThreeA: '#f9f959',
    complementaryThreeB: '#fcffcc',

    secondary: '#e3e3e3',
    secondaryA: '#e3e3e3',
    secondaryB: '#e6e6e6',
    secondaryC: '#eaeaea',
    secondaryD: '#ededed',
    secondaryE: '#f1f1f1',
    secondaryF: '#f4f4f4',
    secondaryG: '#f8f8f8',
    secondaryH: '#fbfbfb',

    third: '#233142',
    thirdA: '#233142',
    thirdB: '#3f4b5a',
    thirdC: '#5a6571',
    thirdD: '#767e89',
    thirdE: '#9198a1',
    thirdF: '#adb2b8',
    thirdG: '#c8cbd0',
    thirdH: '#e4e5e7',

    fourth: '#455d7a',
    fourthA: '#455d7a',
    fourthB: '#5c718b',
    fourthC: '#74859b',
    fourthD: '#8b9aac',
    fourthE: '#a2aebd',
    fourthF: '#b9c2cd',
    fourthG: '#d1d6de',
    fourthH: '#e8ebee',
  },

  fonts: {
    quicksand: quicksand.style.fontFamily,
    dancingScript: dancingScript.style.fontFamily,
    lexend: lexend.style.fontFamily,
    materialSymbolsRounded: 'Material Symbols Rounded',
  },

  fontSize: {
    main: '5rem',
    h1: '3.5rem',
    h2: '1.5rem',
    h3: '1.25rem',

    g: '2.5rem',
    l: '1.1rem',
    m: '1rem',
    s: '0.9rem',

    d: '0.5rem',
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },

  layers: {
    mercury: -20,
    venus: -10,
    earth: 1,
    mars: 10,
    jupiter: 20,
    saturn: 30,
    uranus: 40,
    neptune: 50,
    pluto: 60,
  },

  lineHeight: {
    s: 1.25,
    m: 1.3,
    l: 1.5,
  },

  spacing: {
    none: 0,
    xxs: '0.15rem',
    xs: '0.25rem',
    s: '0.5rem',
    sm: '0.75rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
}

export default theme

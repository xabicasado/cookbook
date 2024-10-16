// import { css } from 'styled-components'
import {
  Dancing_Script, // Raleway,
  // Roboto_Mono,
  // Varela_Round,
  Lexend,
  Quicksand,
} from 'next/font/google'

import type { DefaultTheme } from 'styled-components'

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})
const dancingScript = Dancing_Script({ subsets: ['latin'], display: 'swap' })
const lexend = Lexend({ subsets: ['latin'], display: 'swap' })

// const raleway = Raleway({ subsets: ['latin'], display: 'swap' })
// const robotoMono = Roboto_Mono({ subsets: ['latin'], display: 'swap' })
// const varelaRound = Varela_Round({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
// })

// const generateFontStyle = () => {
//   return css`
//     font-family: ${quicksand.style.fontFamily};
//   `
//   /* font-weight: ${font.style.fontWeight}; */
//   /* ${!!value.uppercase && `text-transform: uppercase`}; */
// }

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

    // https://www.learnui.design/tools/accessible-color-generator.html
    // https://dequeuniversity.com/rules/axe/4.8/color-contrast
    // primary: '#f95959',
    // primaryAAA: '#d73940',
    // primaryAAAA: '#b20826',

    // primaryAAA: '#b52429',
    // primaryAAAA: '#880009',

    // https://palettes.shecodes.io/palettes/267
    // primary: '#f95959',
    // secondary: '#e3e3e3',
    // third: '#233142',
    // fourth: '#455d7a',

    primary: '#f95959',
    primaryA: '#f95959',
    primaryB: '#fa6e6e',
    primaryC: '#fb8383',
    primaryD: '#fb9797',
    primaryE: '#fcacac',
    primaryF: '#fdc1c1',
    primaryG: '#fdd6d6',
    primaryH: '#feeaea',

    // https://palettes.shecodes.io/palettes/391
    // primary: '#f95959',
    // second-color: '#ffe1a1',
    // third-color: '#fcffcc',

    // fourth-color: '#d3e785',
    // complementaryOne: '#85e7ca',

    // https://palettes.shecodes.io/palettes/23
    // third: '#233142',
    // fourth: '#455d7a',
    // primary: '#f95959',
    // seventh-color: '#facf5a',

    // https://htmlcolorcodes.com/color-picker/
    // complementaryOne: '#59f9d1',
    complementaryOne: '#59f9a9',
    // complementaryOneA: '#59f9a9',
    // complementaryOneB: '#6efab4',
    // complementaryOneC: '#83fbbe',
    // complementaryOneD: '#97fbc9',

    complementaryTwo: '#f9a959',
    // complementaryTwoA: '#f9a959',
    // complementaryTwoB: '#faB46e',
    // complementaryTwoC: '#fbbe83',
    // complementaryTwoD: '#fbc997',

    // TODO Check why two complementaries and ubicate this one
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

    // Dark mode good choice
    third: '#233142',
    thirdA: '#233142',
    thirdB: '#3f4b5a',
    thirdC: '#5a6571',
    thirdD: '#767e89',
    thirdE: '#9198a1',
    thirdF: '#adb2b8',
    thirdG: '#c8cbd0',
    thirdH: '#e4e5e7',

    // https://mycolor.space/?hex=%23F95959&sub=1
    // fourth: '#587b98',
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

    // raleway: raleway.style.fontFamily,
    // robotoMono: robotoMono.style.fontFamily,
    // varelaRound: varelaRound.style.fontFamily,
    // Raleway: black 900w -- https://fonts.google.com/specimen/Raleway?preview.text=RECETAS
    // Roboto Mono -- https://fonts.google.com/specimen/Roboto+Mono?preview.text=RECETA%20NUEVA&query=roboto
    // Varela Round -- https://fonts.google.com/specimen/Varela+Round?preview.text=Receta%20nueva
  },

  fontSize: {
    h1: '3.5rem',
    h2: '1.5rem',
    // TODO Fluid typography on html
    // https://css-tricks.com/snippets/css/fluid-typography/
    // h2: 'clamp(1.5rem, 2vw + 1rem, 2.625rem)',
    h3: '1.25rem',

    g: '2.5rem',
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

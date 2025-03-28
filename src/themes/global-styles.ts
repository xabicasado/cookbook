'use client'

import 'material-symbols/rounded.css'
import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

// https://www.smashingmagazine.com/2016/05/fluid-typography/
const GlobalStyles = styled.createGlobalStyle`
  /* CSS reset */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Global styles */
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Deletes the blue-box outline fill when clicked on mobile */
    outline-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
  html,
  body {
    color: ${({ theme }) => theme?.colors?.text};
    font-family: ${({ theme }) => theme?.fonts?.quicksand};

    /* https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/ */
    /* https://css-tricks.com/simplified-fluid-typography/ */
    /* font-size: min(max(100%, 4vw), 22px); */
    font-size: clamp(100%, 2vw + 0.5rem, 22px);

    /* background-color: ${({ theme }) => theme?.colors?.secondary}; */
  }
  body {
    /* Footer */
    /*
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    */

    line-height: ${({ theme }) => theme?.lineHeight?.m};
  }
  h1 {
    font-size: ${({ theme }) => theme?.fontSize?.h1};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-family: ${({ theme }) => theme?.fonts?.dancingScript};
  }
  h2 {
    font-size: ${({ theme }) => theme?.fontSize?.h2};
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  }
  h3 {
    font-size: ${({ theme }) => theme?.fontSize?.h3};
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};

    /* Underlined titles */
    /* text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme?.colors?.primary};
    text-decoration-thickness: 0.25em;
    text-underline-offset: 0.17em; */
  }

  /* Underlined titles */
  /* h3::after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme?.colors?.primary};
    width: ${({ theme }) => theme?.spacing?.m};
    height: ${({ theme }) => theme?.spacing?.xs};
    margin-block: ${({ theme }) => theme?.spacing?.xxs};
  } */

  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
    shape-margin: 1rem;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`

export default GlobalStyles

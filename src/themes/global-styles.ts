'use client'

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
  body {
    line-height: 1.25;
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
  }
  html,
  body {
    color: ${({ theme }) => theme?.colors?.text};
    font-family: ${({ theme }) => theme?.fonts?.quicksand};
    font-size: 100%;
  }
  h1 {
    color: ${({ theme }) => theme?.colors?.primary};
    font-family: ${({ theme }) => theme?.fonts?.dancingScript};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: ${({ theme }) => theme?.fontSize?.h1};
    line-height: 2;
  }
  h2 {
    font-size: ${({ theme }) => theme?.fontSize?.h2};
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};

    /* Underlined titles */
    /* text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme?.colors?.primary};
    text-decoration-thickness: 0.25em;
    text-underline-offset: 0.17em; */
  }
  h3 {
    font-size: ${({ theme }) => theme?.fontSize?.h3};
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles

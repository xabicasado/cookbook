import { create } from '@storybook/theming'

import title from '../public/title.svg'

// https://storybook.js.org/docs/configure/user-interface/theming
// https://javascript.plainenglish.io/how-to-customize-storybook-635aa1ac8894
export default create({
  base: 'light',

  brandTitle: 'a design system for Cookbook',
  brandUrl: 'https://xabicasado.vercel.app/',
  brandImage: title,
  brandTarget: '_blank',

  colorSecondary: '#f95959',
  appBg: '#f0f0f0',
  appBorderColor: '#e3e3e3',
  appBorderRadius: 0,
  textColor: '#000000',

  barTextColor: '#e3e3e3',
  barSelectedColor: '#fff',
  barHoverColor: '#fff',
  barBg: '#f95959',
})

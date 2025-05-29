import type { Decorator } from '@storybook/react'
import type { Preview } from '@storybook/react'

import ThemeProvider from '@/app/features/themes/theme-provider'

// Updated preview: https://medium.com/@michu2k/storybook-7-integration-with-next-js-eda4b1c1d465
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}

export const preview: Preview = {
  // https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
}

const withTheme: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withTheme]
export const tags = ['autodocs']

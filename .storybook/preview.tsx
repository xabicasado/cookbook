import ThemeProvider from '@/themes/theme-provider'
import GlobalStyles from '@/themes/global-styles'

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

const withTheme: DecoratorFn = (Story) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withTheme]

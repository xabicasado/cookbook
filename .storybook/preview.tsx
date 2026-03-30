import type { Decorator, Preview } from '@storybook/nextjs-vite'

import ThemeProvider from '@/app/features/themes/theme-provider'

// https://storybook.js.org/docs/writing-stories/decorators?renderer=react&ref=configure#context-for-mocking
const withTheme: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  tags: ['autodocs'],
}

export default preview

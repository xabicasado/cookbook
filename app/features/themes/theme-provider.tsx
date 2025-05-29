'use client'

import GlobalStyles from './global-styles'
import theme from './theme'
import { ThemeProvider as StyledProvider } from 'styled-components'

import StyledComponentsRegistry from '@/app/features/themes/styled-components-registry'

// https://dev.to/rashidshamloo/using-styled-components-with-nextjs-v13-typescript-2l6m
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <StyledProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledProvider>
    </StyledComponentsRegistry>
  )
}

export default ThemeProvider

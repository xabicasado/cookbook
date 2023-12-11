'use client'

import StyledComponentsRegistry from '@/utils/styled-components-registry'
import { ThemeProvider as StyledProvider } from 'styled-components'
import theme from './theme'

// https://dev.to/rashidshamloo/using-styled-components-with-nextjs-v13-typescript-2l6m
const ThemeProvider = (props: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <StyledProvider theme={theme}>{props.children}</StyledProvider>
    </StyledComponentsRegistry>
  )
}

export default ThemeProvider

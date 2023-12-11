import type { Metadata } from 'next'
import GlobalStyles from '@/themes/global-styles'
import ThemeProvider from '@/themes/theme-provider'
import { ContainerStyled, MainTitle } from './layout.styled'

export const metadata: Metadata = {
  title: 'Cookbook',
  description: 'Save your recipes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-ES">
      <body>
        <ThemeProvider>
          <GlobalStyles />
          <ContainerStyled>
            <MainTitle>Cookbook</MainTitle>
            {children}
          </ContainerStyled>
        </ThemeProvider>
      </body>
    </html>
  )
}

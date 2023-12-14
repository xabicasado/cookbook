import type { Metadata, Viewport } from 'next'
import GlobalStyles from '@/themes/global-styles'
import ThemeProvider from '@/themes/theme-provider'
import { MainContainerStyled } from './layout.styled'
import { RecipeProvider } from '@/contexts/recipe.context'
import recipesMock from '@/mocks/recipes.mock'

export const metadata: Metadata = {
  title: 'Cookbook',
  description: 'Save your recipes',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
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
          <MainContainerStyled>
            <h1>Cookbook</h1>
            <RecipeProvider value={recipesMock}>{children}</RecipeProvider>
          </MainContainerStyled>
        </ThemeProvider>
      </body>
    </html>
  )
}

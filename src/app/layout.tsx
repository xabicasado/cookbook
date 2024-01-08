import type { Metadata, Viewport } from 'next'
// import Link from 'next/link'
import GlobalStyles from '@/themes/global-styles'
// import '@/themes/global-icons.css'
import ThemeProvider from '@/themes/theme-provider'
import { MainContainerStyled } from './layout.styled'
import { RecipeProvider } from '@/contexts/recipe.context'
// import { NotificationProvider } from '@/contexts/notification.context'
import { Header } from '@/components/header'
// import { Footer } from '@/components/footer'
// import { anonymousFunction } from '@/utils/commons'

import recipesMock from '@/mocks/recipes.mock'

// https://favicon.io/favicon-generator/
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

          {/* <GlobalIcons /> */}

          {/* TODO set a unique global Notification */}
          {/* <NotificationProvider
            value={{
              description: '',
              isOpen: false,
              setIsOpen: anonymousFunction,
            }}
          > */}
          <Header title={'Cookbook'} />
          <MainContainerStyled>
            <RecipeProvider value={{ recipes: recipesMock }}>
              {children}
            </RecipeProvider>
          </MainContainerStyled>
          {/* <Footer /> */}
          {/* </NotificationProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}

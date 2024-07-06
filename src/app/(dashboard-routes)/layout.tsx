import { MainStyled } from './layout.styled'

import { NewRecipeDraftProvider } from '@/features/recipes'
import { Header, NotificationProvider } from '@/features/ui'

export default async function RecipesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NotificationProvider>
      <NewRecipeDraftProvider>
        <Header title="Cookbook" />

        <MainStyled>{children}</MainStyled>
      </NewRecipeDraftProvider>
    </NotificationProvider>
  )
}

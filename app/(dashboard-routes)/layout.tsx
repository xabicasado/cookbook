import { MainStyled } from './layout.styled'

import { NewRecipeDraftProvider } from '@/app/features/recipes'
import {
  Header,
  NotificationProvider,
  SidebarProvider,
} from '@/app/features/ui'

export default async function RecipesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NotificationProvider>
      <NewRecipeDraftProvider>
        <Header />
        <SidebarProvider>
          <MainStyled>{children}</MainStyled>
        </SidebarProvider>
      </NewRecipeDraftProvider>
    </NotificationProvider>
  )
}

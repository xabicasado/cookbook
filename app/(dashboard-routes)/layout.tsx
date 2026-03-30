import type { ReactNode } from 'react'

import { MainStyled } from './layout.styled'

import { NewRecipeDraftProvider } from '@/app/features/recipes'
import {
  Header,
  NotificationProvider,
  SidebarProvider,
} from '@/app/features/ui'

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
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

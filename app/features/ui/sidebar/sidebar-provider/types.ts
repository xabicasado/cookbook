import type { ReactNode } from 'react'

export type SidebarProviderProps = {
  children: ReactNode
}

export type SidebarContextType = {
  showSidebar: (children: ReactNode, title?: string) => void
  closeSidebar: () => void
}

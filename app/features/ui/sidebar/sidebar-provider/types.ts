import type { ReactNode } from 'react'

export type SidebarProviderPropsType = {
  children: ReactNode
}

export type SidebarContextType = {
  showSidebar: (children: ReactNode, title?: string) => void
  closeSidebar: () => void
}

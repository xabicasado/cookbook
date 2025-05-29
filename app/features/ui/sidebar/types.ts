import type { ReactNode } from 'react'

export type SidebarProps = {
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
  // position?: 'left' | 'right' | 'top' | 'bottom'
  title?: string
  children: ReactNode
}

export type * from './sidebar-provider/types'

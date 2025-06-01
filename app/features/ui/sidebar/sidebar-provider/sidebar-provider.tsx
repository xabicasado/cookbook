'use client'

import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

import { Sidebar } from '../sidebar'
import type { SidebarContextType, SidebarProviderPropsType } from './types'

import {
  anonymousFunction,
  disableScroll,
  enableScroll,
} from '@/app/features/utils/commons'

const SidebarContext = createContext<SidebarContextType>({
  showSidebar: anonymousFunction,
  closeSidebar: anonymousFunction,
})

export const SidebarProvider = ({ children }: SidebarProviderPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ReactNode>(null)
  const [title, setTitle] = useState<string | undefined>(undefined)

  const showSidebar = (children: ReactNode, title?: string) => {
    setIsOpen(true)
    setTitle(title)
    setContent(children)

    disableScroll()
  }

  const closeSidebar = () => {
    setIsOpen(false)

    enableScroll()
  }

  return (
    <SidebarContext
      value={{
        showSidebar,
        closeSidebar,
      }}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
        {content}
      </Sidebar>
      {children}
    </SidebarContext>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)

  if (context === undefined)
    throw new Error(
      'useSidebarContext must be used within the scope of SidebarProvider'
    )

  return context
}

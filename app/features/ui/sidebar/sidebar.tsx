import { enableScroll } from '../../utils/commons'
import {
  SidebarHeaderSectionStyled,
  SidebarOverlayStyled,
  SidebarSectionStyled,
  SidebarStyled,
  TitleStyled,
} from './sidebar.styled'
import type { SidebarProps } from './types'

import { Icon } from '@/app/features/ui'

export function Sidebar({ isOpen, setIsOpen, title, children }: SidebarProps) {
  const toggleClose = () => {
    setIsOpen(false)
    enableScroll()
  }

  return (
    <>
      {/* <SidebarBackgroundStyled $isOpen={isOpen} /> */}
      <SidebarOverlayStyled $isOpen={isOpen} />
      <SidebarStyled $isOpen={isOpen}>
        <SidebarSectionStyled>
          <SidebarHeaderSectionStyled>
            <TitleStyled>{title ?? 'Sidebar'}</TitleStyled>

            <span onClick={toggleClose}>
              <Icon name="close" />
            </span>
          </SidebarHeaderSectionStyled>
        </SidebarSectionStyled>
        {children}
      </SidebarStyled>
    </>
  )
}

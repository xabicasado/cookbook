'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import {
  CloseButtonStyled,
  MenuHeaderContainerStyled,
  MenuLinkStyled,
  MenuOverlayListStyled,
  MenuStyled,
  MenuTitleStyled,
} from './menu.styled'
import type { MenuItemType, MenuPropsType } from './types'

import { Icon } from '@/features/ui'

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
export function Menu(props: MenuPropsType) {
  const { menuItems, setIsOpen, ...restProps } = props

  const pathname = usePathname()

  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, setIsOpen])

  return (
    <MenuStyled {...restProps}>
      <MenuHeaderContainerStyled>
        <MenuTitleStyled>Menú</MenuTitleStyled>

        <CloseButtonStyled onClick={handleClose}>
          <Icon name="close" size="large" />
        </CloseButtonStyled>
      </MenuHeaderContainerStyled>

      <MenuOverlayListStyled>
        {menuItems?.length !== 0 &&
          menuItems?.map((menuItem: MenuItemType, index) => (
            <MenuLinkStyled key={index} isActive={pathname === menuItem?.href}>
              <Link href={menuItem?.href}>{menuItem?.title}</Link>
            </MenuLinkStyled>
          ))}
      </MenuOverlayListStyled>
    </MenuStyled>
  )
}

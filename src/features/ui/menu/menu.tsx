'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import {
  MenuHeaderContainerStyled,
  MenuLinkStyled,
  MenuOverlayListStyled,
  MenuStyled,
} from './menu.styled'
import type { MenuItemType, MenuPropsType } from './types'

import { Button } from '@/features/ui'

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
        <Button size="giant" beforeIcon="close" onClick={handleClose} />
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

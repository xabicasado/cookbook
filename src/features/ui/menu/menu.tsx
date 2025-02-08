'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect } from 'react'

import {
  MenuHeaderContainerStyled,
  MenuLinkStyled,
  MenuOverlayListStyled,
  MenuStyled,
} from './menu.styled'
import type { MenuItemType, MenuPropsType } from './types'

import { signOut } from '@/app/(login-routes)/login/actions'
import { Button } from '@/features/ui'

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
export function Menu(props: MenuPropsType) {
  const { menuItems, setIsOpen, ...restProps } = props

  const pathname = usePathname()

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen])

  const handleSignOut = async () => await signOut()

  useEffect(handleClose, [pathname, handleClose])

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
        <MenuLinkStyled onClick={handleSignOut}>Cerrar sesión</MenuLinkStyled>
      </MenuOverlayListStyled>
    </MenuStyled>
  )
}

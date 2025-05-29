'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect } from 'react'

import { enableScroll } from '../../utils/commons'
import {
  MenuHeaderStyled,
  MenuLinkStyled,
  MenuOverlayListStyled,
  MenuStyled,
} from './menu.styled'
import type { MenuItemType, MenuPropsType } from './types'

import { Button } from '@/app/features/ui'

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
export function Menu({ menuItems, isOpen, setIsOpen }: MenuPropsType) {
  const pathname = usePathname()

  const handleClose = useCallback(() => {
    setIsOpen(false)
    enableScroll()
  }, [setIsOpen])

  useEffect(handleClose, [pathname, handleClose])

  return (
    <MenuStyled $isOpen={isOpen}>
      <MenuHeaderStyled>
        <Button size="giant" beforeIcon="close" onClick={handleClose} />
      </MenuHeaderStyled>

      <MenuOverlayListStyled>
        {menuItems?.length !== 0 &&
          menuItems?.map((menuItem: MenuItemType, index) => (
            <MenuLinkStyled key={index} $isActive={pathname === menuItem?.href}>
              <Link href={menuItem?.href}>{menuItem?.title}</Link>
            </MenuLinkStyled>
          ))}
      </MenuOverlayListStyled>
    </MenuStyled>
  )
}

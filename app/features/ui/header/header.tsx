'use client'

import Link from 'next/link'
import { useState } from 'react'

import { disableScroll } from '../../utils/commons'
import { MENU_ITEMS } from './header.constants'
import { HeaderStyled, HeaderTitleStyled } from './header.styled'
import type { HeaderProps } from './types'

import { Button, Menu } from '@/app/features/ui'
import type { MenuPropsType } from '@/app/features/ui/types'

export function Header({ title }: HeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const menuProps: MenuPropsType = {
    isOpen,
    setIsOpen,
    menuItems: MENU_ITEMS,
  }

  const handleOnClick = () => {
    setIsOpen(true)
    disableScroll()
  }

  return (
    <HeaderStyled>
      <HeaderTitleStyled>
        <Link href="/" passHref>
          <h1>{title ?? 'Cookbook'}</h1>
        </Link>
      </HeaderTitleStyled>

      <Button size="giant" beforeIcon="menu" onClick={handleOnClick}></Button>

      <Menu {...menuProps} />
    </HeaderStyled>
  )
}

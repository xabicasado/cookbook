'use client'

import Link from 'next/link'
import { useState } from 'react'

import { MENU_ITEMS } from './header.constants'
import { HeaderStyled, HeaderTitleStyled } from './header.styled'
import type { HeaderProps } from './types'

import { Button, Menu } from '@/features/ui'
import type { MenuPropsType } from '@/features/ui/types'

export function Header({ title }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuProps: MenuPropsType = {
    isOpen,
    setIsOpen,
    menuItems: MENU_ITEMS,
  }

  const handleOnClick = () => setIsOpen(true)

  return (
    <HeaderStyled>
      <HeaderTitleStyled>
        <Link href={'/'} passHref>
          <h1>{title ?? 'Cookbook'}</h1>
        </Link>
      </HeaderTitleStyled>

      <Button size="giant" beforeIcon="menu" onClick={handleOnClick}></Button>

      <Menu {...menuProps} />
    </HeaderStyled>
  )
}

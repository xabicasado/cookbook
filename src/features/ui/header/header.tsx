'use client'

import Link from 'next/link'
import { useState } from 'react'

import { MENU_ITEMS } from './header.constants'
import { HeaderStyled, HeaderTitleStyled } from './header.styled'
import type { HeaderProps } from './types'

import { Button, Menu } from '@/features/ui'
import type { MenuPropsType } from '@/features/ui/types'

export function Header(props: HeaderProps) {
  const { title } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = () => {
    setIsOpen(true)
  }

  const menuProps: MenuPropsType = {
    isOpen,
    setIsOpen,
    menuItems: MENU_ITEMS,
  }

  return (
    <HeaderStyled>
      <HeaderTitleStyled>
        <Link href={'/'} passHref>
          <h1>{title}</h1>
        </Link>
      </HeaderTitleStyled>

      <Button size="giant" beforeIcon="menu" onClick={handleOnClick}></Button>

      <Menu {...menuProps} />
    </HeaderStyled>
  )
}

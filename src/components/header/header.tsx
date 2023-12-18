'use client'

import Link from 'next/link'

import {
  HeaderStyled,
  HeaderContainerStyled,
  HeaderTitleStyled,
  HeaderMenuStyled,
} from './header.styled'
import { Menu } from '@/components/menu'
import { useState } from 'react'

type HeaderProps = {
  title: string
}

export function Header(props: HeaderProps) {
  const { title } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderStyled>
      <HeaderContainerStyled>
        <HeaderTitleStyled>
          <Link href={'/'}>
            <h1>{title}</h1>
          </Link>
        </HeaderTitleStyled>

        <HeaderMenuStyled onClick={handleOnClick}>&#9776;</HeaderMenuStyled>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </HeaderContainerStyled>
    </HeaderStyled>
  )
}

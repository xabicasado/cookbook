import { useEffect } from 'react'
// import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MenuStyled, MenuOverlayStyled, CloseButtonStyled } from './menu.styled'

type MenuProps = {
  isOpen: boolean | false
  setIsOpen: (isOpen: boolean) => void
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
export function Menu(props: MenuProps) {
  const pathname = usePathname()
  const { isOpen, setIsOpen } = props

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <MenuStyled {...props}>
      <CloseButtonStyled onClick={handleClose}>&times;</CloseButtonStyled>
      <MenuOverlayStyled>
        <ul>
          {/* <Link href={'/'}>
            <li>Inventario de recetas</li>
          </Link> */}
          {/* <Link href={'/recipes/new'}>
            <li>Añadir receta</li>
          </Link> */}
          {/* <Link href={'/shopping-list'}>
            <li>Lista de la compra</li>
          </Link> */}
        </ul>
      </MenuOverlayStyled>
    </MenuStyled>
  )
}

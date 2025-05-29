export type MenuItemType = {
  title: string
  href: string
}

export type MenuPropsType = {
  menuItems: MenuItemType[]
  isOpen: boolean | false
  setIsOpen: (isOpen: boolean) => void
}

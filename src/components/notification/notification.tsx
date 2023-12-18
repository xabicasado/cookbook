'use client'

import {
  // useEffect,
  useState,
} from 'react'
// import { usePathname } from 'next/navigation'

import {
  NotificationStyled,
  NotificationTextStyled,
  CloseButtonStyled,
} from './notification.styled'

type NotificationProps = {
  description: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Notification(props: NotificationProps) {
  //   const pathname = usePathname()
  const { description, isOpen, setIsOpen } = props

  //   const [handleIsOpen, setHandleIsOpen] = useState(true)
  // const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  //   useEffect(() => {
  //     setIsOpened(!isOpened)
  //   }, [pathname])

  return (
    <NotificationStyled {...props} onClick={handleClose}>
      <NotificationTextStyled>{description}</NotificationTextStyled>
      <CloseButtonStyled>&times;</CloseButtonStyled>
    </NotificationStyled>
  )
}

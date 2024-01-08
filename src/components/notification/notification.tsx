'use client'

import { useEffect, useState } from 'react'

import {
  NotificationStyled,
  NotificationTextStyled,
  CloseButtonStyled,
} from './notification.styled'

export type NotificationProps = {
  description: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Notification(props: NotificationProps) {
  const { description, isOpen, setIsOpen } = props

  const NOTIFICATION_DURATION = 3
  const [timer, setTimer] = useState<number | undefined>(undefined)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) setTimer(NOTIFICATION_DURATION * 1000)
  }, [isOpen])

  useEffect(() => {
    let unmountTimeout: string | number | NodeJS.Timeout | undefined

    if (timer !== undefined && timer > 0) {
      unmountTimeout = setTimeout(() => {
        setTimer(undefined)
        setIsOpen(false)
      }, timer)
    }
    return () => {
      clearTimeout(unmountTimeout)
    }
  }, [timer])

  return (
    <NotificationStyled {...props} onClick={handleClose}>
      <NotificationTextStyled>{description}</NotificationTextStyled>
      <CloseButtonStyled>&times;</CloseButtonStyled>
    </NotificationStyled>
  )
}

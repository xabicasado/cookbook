'use client'

import { useEffect, useState } from 'react'

import { NOTIFICATION_DURATION } from './notification.constants'
import {
  CloseButtonStyled,
  NotificationStyled,
  NotificationTextStyled,
} from './notification.styled'
import type { NotificationProps } from './types'

export function Notification(props: NotificationProps) {
  const { description, isOpen, setIsOpen } = props

  const [timer, setTimer] = useState<number | undefined>(undefined)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) setTimer(NOTIFICATION_DURATION)
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

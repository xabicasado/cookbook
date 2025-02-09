'use client'

import { useEffect, useState } from 'react'

import {
  NOTIFICATION_DURATION,
  NOTIFICATION_ICON,
} from './notification.constants'
import { DescriptionStyled, NotificationStyled } from './notification.styled'
import type { NotificationProps } from './types'

import { Icon } from '@/features/ui'

export function Notification(props: NotificationProps) {
  const { description, isOpen, setIsOpen, type } = props

  const [timer, setTimer] = useState<number | undefined>(undefined)

  const toggleClose = () => {
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
  }, [timer, setIsOpen])

  return (
    <NotificationStyled {...props} onClick={toggleClose}>
      <DescriptionStyled>
        {type && <Icon name={NOTIFICATION_ICON[type]} />}
        {description}
      </DescriptionStyled>

      <Icon name="close" />
    </NotificationStyled>
  )
}

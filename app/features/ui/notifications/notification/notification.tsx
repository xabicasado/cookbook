'use client'

import { useEffect } from 'react'

import {
  NOTIFICATION_DURATION,
  NOTIFICATION_ICON,
} from './notification.constants'
import { DescriptionStyled, NotificationStyled } from './notification.styled'
import type { NotificationProps } from './types'

import { Icon } from '@/app/features/ui'

export function Notification({
  description,
  isOpen,
  setIsOpen,
  type,
}: NotificationProps) {
  const toggleClose = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return

    const unmountTimeout = setTimeout(() => {
      setIsOpen(false)
    }, NOTIFICATION_DURATION)

    return () => clearTimeout(unmountTimeout)
  }, [isOpen, setIsOpen])

  return (
    <NotificationStyled $isOpen={isOpen} onClick={toggleClose}>
      <DescriptionStyled>
        {type && <Icon name={NOTIFICATION_ICON[type]} />}
        {description}
      </DescriptionStyled>

      <Icon name="close" />
    </NotificationStyled>
  )
}

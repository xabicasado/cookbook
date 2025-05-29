'use client'

import { useEffect, useState } from 'react'

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
  const [timer, setTimer] = useState<number | undefined>(undefined)

  const toggleClose = () => setIsOpen(false)

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

    return () => clearTimeout(unmountTimeout)
  }, [timer, setIsOpen])

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

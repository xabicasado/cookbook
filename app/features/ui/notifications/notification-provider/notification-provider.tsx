'use client'

import { createContext, useContext, useState } from 'react'

import { Notification } from '../notification'
import type {
  NotificationContextType,
  // NotificationProps,
  NotificationProviderPropsType,
} from '../types'

import { anonymousFunction } from '@/app/features/utils/commons'

// const NotificationContext = createContext<NotificationProps>({
const NotificationContext = createContext<NotificationContextType>({
  showNotification: anonymousFunction,
})

export const NotificationProvider = ({
  children,
}: NotificationProviderPropsType) => {
  const [description, setDescription] = useState<string>('')
  const [type, setType] = useState<'success' | 'warning' | 'error' | undefined>(
    undefined
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // TODO Check rendering
  const showNotification = (
    description: string,
    type?: 'success' | 'warning' | 'error' | undefined
  ) => {
    // TODO check setIsOpen(false)

    setDescription(description)
    setIsOpen(true)
    setType(type)
  }

  return (
    <NotificationContext
      value={{
        showNotification,
      }}
    >
      {/* TODO Create as children */}
      <Notification
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        type={type ?? undefined}
      />
      {children}
    </NotificationContext>
  )
}

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)

  if (context === undefined)
    throw new Error(
      'useNotificationContext must be used within the scope of NotificationProvider'
    )

  return context
}

'use client'

import { createContext, useContext, useState } from 'react'

import { Notification } from '../notification'
import type {
  NotificationContextType, // NotificationProps,
  NotificationProviderPropsType,
} from '../types'

import { anonymousFunction } from '@/utils/commons'

// const NotificationContext = createContext<NotificationProps>({
const NotificationContext = createContext<NotificationContextType>({
  showNotification: anonymousFunction,
})

export const NotificationProvider = (props: NotificationProviderPropsType) => {
  const { children } = props

  const [description, setDescription] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showNotification = (description: string) => {
    // TODO check setIsOpen(false)

    setDescription(description)
    setIsOpen(true)
  }

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
      }}
    >
      {/* TODO Create as children */}
      <Notification
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
      />
      {children}
    </NotificationContext.Provider>
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

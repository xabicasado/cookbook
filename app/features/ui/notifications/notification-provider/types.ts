import type { ReactNode } from 'react'

export type NotificationProviderProps = {
  children: ReactNode
}

export type NotificationContextType = {
  showNotification: (
    description: string,
    type?: 'success' | 'warning' | 'error' | undefined
  ) => void
}

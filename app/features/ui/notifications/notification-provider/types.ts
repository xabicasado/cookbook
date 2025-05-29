// import type { NotificationProps } from '@/features/ui/types'
import type { ReactNode } from 'react'

export type NotificationProviderPropsType = {
  children: ReactNode
  // notification?: NotificationProps
}

export type NotificationContextType = {
  // notification: NotificationProps
  showNotification: (
    description: string,
    type?: 'success' | 'warning' | 'error' | undefined
  ) => void
}

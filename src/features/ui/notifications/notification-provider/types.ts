// import type { NotificationProps } from '@/features/ui/types'

export type NotificationProviderPropsType = {
  children: React.ReactNode
  // notification?: NotificationProps
}

export type NotificationContextType = {
  // notification: NotificationProps
  showNotification: (description: string) => void
}

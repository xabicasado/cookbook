export type NotificationType = 'success' | 'warning' | 'error' | undefined

export type NotificationProps = {
  description: string
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
  type?: NotificationType
}

export type NotificationIcon = { [key: string]: string }

export type NotificationProps = {
  description: string
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
  type?: 'success' | 'warning' | 'error' | undefined
}

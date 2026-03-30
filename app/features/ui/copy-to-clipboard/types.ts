import { type ButtonProps } from '@/app/features/ui/types'

export type CopyToClipboardProps = Omit<ButtonProps, 'onClick'> & {
  text: string
  onClick?: () => void
}

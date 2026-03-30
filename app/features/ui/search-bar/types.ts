import { type ChangeEvent } from 'react'

export type SearchBarProps = {
  name: string
  placeholder?: string
  label?: string
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

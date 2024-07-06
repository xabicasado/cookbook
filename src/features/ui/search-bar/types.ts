import { type ChangeEvent } from 'react'

export type SearchBarProps = {
  placeholder?: string
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

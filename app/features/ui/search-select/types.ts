import type { ChangeEvent, KeyboardEvent } from 'react'

export type SearchSelectProps = {
  name: string
  placeholder?: string
  label?: string
  disabled?: boolean
  options?: string[]
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

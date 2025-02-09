import { type ChangeEvent } from 'react'

export type ToggleProps = {
  name: string
  disabled?: boolean
  iconOn?: string
  iconOff?: string
  labelOn?: string
  labelOff?: string
  label?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

import { type ChangeEvent } from 'react'

export type ToggleProps = {
  name: string
  disabled?: boolean
  label?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

import { type ChangeEvent } from 'react'

export type EditInputProps = {
  name: string
  label?: string
  subText?: string
  content?: string
  placeholder?: string
  required?: boolean
  inverted?: boolean
  type?: string
  maxLength?: number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onInvalid?: (event: ChangeEvent<HTMLInputElement>) => void
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void
}

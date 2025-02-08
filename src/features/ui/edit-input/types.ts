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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

import { type Dispatch, type SetStateAction } from 'react'

export type NumberRangeProps = {
  number: number
  setNumber: Dispatch<SetStateAction<number>>
  label?: string
  onNumberChange?: (newNumber: number) => void
}

import type { ReactNode } from 'react'

export type ServingsProviderProps = {
  servings: number
  children: ReactNode
}

export type ServingsContextProps = {
  currentServings: number
  addServing: () => void
  removeServing: () => void
}

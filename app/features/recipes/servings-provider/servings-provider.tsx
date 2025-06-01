'use client'

import { createContext, useContext, useState } from 'react'

import { DEFAULT_SERVINGS } from '../recipe/recipe.constants'
import type { ServingsContextProps, ServingsProviderProps } from './types'

import { anonymousFunction } from '@/app/features/utils/commons'

const ServingsContext = createContext<ServingsContextProps>({
  currentServings: DEFAULT_SERVINGS,
  addServing: anonymousFunction,
  removeServing: anonymousFunction,
})

export const ServingsProvider = ({
  servings,
  children,
}: ServingsProviderProps) => {
  const [currentServings, setCurrentServings] = useState(servings)

  const addServing = () => setCurrentServings((prev) => prev + 1)

  const removeServing = () =>
    setCurrentServings((prev) => (prev > 1 ? prev - 1 : prev))

  return (
    <ServingsContext value={{ currentServings, addServing, removeServing }}>
      {children}
    </ServingsContext>
  )
}

export const useServingsContext = () => {
  const context = useContext(ServingsContext)

  if (!context)
    throw new Error('useServings must be used within a ServingsProvider')

  return context
}

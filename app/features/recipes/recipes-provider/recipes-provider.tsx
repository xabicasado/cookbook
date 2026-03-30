'use client'

import { createContext, useContext } from 'react'

import type { RecipesContextState, RecipesProviderProps } from './types'

const RecipesContext = createContext<RecipesContextState | undefined>(undefined)

export const RecipesProvider = ({
  recipesPromise,
  children,
}: RecipesProviderProps) => {
  return <RecipesContext value={{ recipesPromise }}>{children}</RecipesContext>
}

export const useRecipesContext = () => {
  const context = useContext(RecipesContext)

  if (!context)
    throw new Error(
      'useRecipesContext must be used within the scope of RecipesProvider'
    )

  return context
}

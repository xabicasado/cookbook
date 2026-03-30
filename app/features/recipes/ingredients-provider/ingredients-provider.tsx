'use client'

import { createContext, useContext, useMemo } from 'react'

import type { IngredientsProviderProps } from './types'

import { getClientInjection } from '@/di/client/container'
import type { Ingredients } from '@/src/entities/models/recipe'

const IngredientsContext = createContext<Ingredients | undefined>(undefined)

export const IngredientsProvider = ({
  recipes,
  children,
}: IngredientsProviderProps) => {
  const getRecipesIngredientsController = getClientInjection(
    'IGetRecipesIngredientsController'
  )

  const ingredients: Ingredients = useMemo(
    () => getRecipesIngredientsController(recipes ?? []),
    [recipes, getRecipesIngredientsController]
  )

  return <IngredientsContext value={ingredients}>{children}</IngredientsContext>
}

export const useIngredientsContext = () => {
  const context = useContext(IngredientsContext)

  if (!context)
    throw new Error(
      'useIngredientsContext must be used inside IngredientsProvider'
    )
  return context
}

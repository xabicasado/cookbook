'use client'

import { useState, createContext, useContext } from 'react'
import { type RecipeType } from '@/types/recipe.types'
import recipesMock from '@/mocks/recipes.mock'

const anonymousFunction = () => ({})

export type RecipeContextType = {
  recipeContext: RecipeType[]
  setRecipeContext: (r: RecipeType[]) => void
}

export const RecipeContext = createContext<RecipeContextType>({
  recipeContext: recipesMock,
  setRecipeContext: anonymousFunction,
})

export const RecipeProvider = ({
  children,
  value,
}: {
  children: React.ReactNode
  value: RecipeType[]
}) => {
  const [recipeContext, setRecipeContext] = useState<RecipeType[]>(value)

  return (
    <RecipeContext.Provider value={{ recipeContext, setRecipeContext }}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipeContext = () => useContext(RecipeContext)

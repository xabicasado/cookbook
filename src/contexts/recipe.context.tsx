'use client'

import { useState, createContext, useContext } from 'react'
import { type RecipeType } from '@/types/recipe.types'
import recipesMock from '@/mocks/recipes.mock'
import { anonymousFunction } from '@/utils/commons'

type RecipeContextType = {
  recipeContext: RecipeType[]
  setRecipeContext: (recipe: RecipeType[]) => void
}

// TODO Rename to plural RecipesContext
const RecipeContext = createContext<RecipeContextType>({
  recipeContext: recipesMock,
  setRecipeContext: anonymousFunction,
})

export const useRecipeContext = () => useContext(RecipeContext)

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

'use client'

import { useState, createContext, useContext } from 'react'
import { type RecipeType } from '@/types/recipe.types'
import recipesMock from '@/mocks/recipes.mock'
import { anonymousFunction } from '@/utils/commons'

type RecipesType = {
  newRecipeTitle?: string
  recipes?: RecipeType[]
}

type RecipeContextType = {
  recipeContext: RecipesType
  setRecipeContext: (recipeContext: RecipesType) => void
}

// TODO Rename to plural RecipesContext
const RecipeContext = createContext<RecipeContextType>({
  recipeContext: { recipes: recipesMock },
  setRecipeContext: anonymousFunction,
})

export const useRecipeContext = () => useContext(RecipeContext)

export const RecipeProvider = ({
  children,
  value,
}: {
  children: React.ReactNode
  value: RecipesType
}) => {
  const [recipeContext, setRecipeContext] = useState<RecipesType>(value)

  return (
    <RecipeContext.Provider value={{ recipeContext, setRecipeContext }}>
      {children}
    </RecipeContext.Provider>
  )
}

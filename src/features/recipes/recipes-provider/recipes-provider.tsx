'use client'

import { createContext, useContext, useState } from 'react'

import type {
  IngredientType,
  RecipeCardType,
  RecipesContextType,
  RecipesProviderPropsType,
} from '../types'

import { anonymousFunction, cleanSearchString } from '@/utils/commons'

const RecipesContext = createContext<RecipesContextType>({
  filteredRecipes: [],
  searchRecipesByName: anonymousFunction,
  searchRecipesByIngredients: anonymousFunction,
  resetSearch: anonymousFunction,
})

export const RecipesProvider = (props: RecipesProviderPropsType) => {
  // TODO Add ingredients from database
  const { recipes, children } = props

  const [filteredRecipes, setFilteredRecipes] =
    useState<RecipeCardType[]>(recipes)

  const searchRecipesByName = (searchInput: string) => {
    if (searchInput === '') setFilteredRecipes(recipes ?? [])

    const inputWords = cleanSearchString(searchInput).split(' ')

    setFilteredRecipes(
      recipes?.filter((r) =>
        inputWords.every((word) => cleanSearchString(r.title).includes(word))
      )
    )
  }

  const searchRecipesByIngredients = (ingredientsList: IngredientType[]) => {
    if (!ingredientsList?.length) setFilteredRecipes(recipes ?? [])

    setFilteredRecipes(
      recipes.filter((recipe) => {
        return ingredientsList.every((ingredient) =>
          recipe.ingredients.some(
            (recipeIngredient) => recipeIngredient.name === ingredient.name
          )
        )
      })
    )
  }

  const resetSearch = () => {
    setFilteredRecipes(recipes)
  }

  return (
    <RecipesContext.Provider
      value={{
        filteredRecipes,
        searchRecipesByName,
        searchRecipesByIngredients,
        resetSearch,
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}

export const useRecipesContext = () => {
  const context = useContext(RecipesContext)

  if (context === undefined)
    throw new Error(
      'useRecipesContext must be used within the scope of RecipesProvider'
    )

  return context
}

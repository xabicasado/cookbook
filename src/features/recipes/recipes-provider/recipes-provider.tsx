'use client'

import { type ChangeEvent, createContext, useContext, useState } from 'react'

import { useNewRecipeDraftContext } from '../new-recipe-draft-provider'
import type {
  RecipeCardType,
  RecipesContextType,
  RecipesProviderPropsType,
} from '../types'

import {
  anonymousFunction,
  cleanSearchString,
  setTitleFormat,
} from '@/utils/commons'

const RecipesContext = createContext<RecipesContextType>({
  filteredRecipes: [],
  handleChange: anonymousFunction,
})

export const RecipesProvider = (props: RecipesProviderPropsType) => {
  const { recipes, children } = props
  const { newRecipeDrafts, setNewRecipeDrafts } = useNewRecipeDraftContext()

  const [filteredRecipes, setFilteredRecipes] =
    useState<RecipeCardType[]>(recipes)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value

    if (searchInput === '') setFilteredRecipes(recipes ?? [])

    if (recipes !== undefined) {
      const inputWords = cleanSearchString(searchInput).split(' ')

      const newRecipeTitle = setTitleFormat(searchInput)
      setNewRecipeDrafts({ ...newRecipeDrafts, title: newRecipeTitle })

      setFilteredRecipes(
        recipes?.filter((r) =>
          inputWords.every((word) => cleanSearchString(r.title).includes(word))
        )
      )
    }
  }

  return (
    <RecipesContext.Provider
      value={{
        filteredRecipes,
        handleChange,
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

'use client'

import { createContext, useContext, useReducer } from 'react'

import { useIngredientsContext } from '../ingredients-provider/ingredients-provider'
import { recipesSearcherReducer } from './recipes-searcher-reducer'
import {
  FILTER_BY_INGREDIENTS,
  FILTER_BY_TITLE,
  TOGGLE_FILTER_TYPE,
} from './recipes-searcher-reducer.constants'
import type {
  RecipesSearcherContextDispatch,
  RecipesSearcherContextState,
  RecipesSearcherProviderProps,
} from './types'

import { getClientInjection } from '@/di/client/container'
import type { Ingredients } from '@/src/entities/models/recipe'

const RecipesSearcherStateContext = createContext<
  RecipesSearcherContextState | undefined
>(undefined)

export const RecipesSearcherDispatchContext = createContext<
  RecipesSearcherContextDispatch | undefined
>(undefined)

export const RecipesSearcherProvider = ({
  recipes,
  children,
}: RecipesSearcherProviderProps) => {
  const initialState: RecipesSearcherContextState = {
    recipes: recipes ?? [],
    filteredRecipes: recipes ?? [],
    ingredients: useIngredientsContext(),
    isFilteringByIngredients: false,
    selectedIngredients: [],
    titleFilter: '',
  }

  const [state, dispatch] = useReducer(recipesSearcherReducer, initialState)

  const toggleFilterType = () =>
    dispatch({
      type: TOGGLE_FILTER_TYPE,
    })

  const filterByTitle = (searchInput: string) => {
    const filterRecipesByTitleController = getClientInjection(
      'IFilterRecipesByTitleController'
    )

    const filtered = filterRecipesByTitleController(state.recipes, searchInput)

    dispatch({
      type: FILTER_BY_TITLE,
      payload: { filteredRecipes: filtered, searchInput },
    })
  }

  const filterByIngredients = (ingredientsList: Ingredients) => {
    const filterRecipesByIngredientsController = getClientInjection(
      'IFilterRecipesByIngredientsController'
    )

    const filtered = filterRecipesByIngredientsController(
      state.recipes,
      ingredientsList
    )

    dispatch({
      type: FILTER_BY_INGREDIENTS,
      payload: {
        selectedIngredients: ingredientsList,
        filteredRecipes: filtered,
      },
    })
  }

  return (
    <RecipesSearcherStateContext value={state}>
      <RecipesSearcherDispatchContext
        value={{
          filterByTitle,
          filterByIngredients,
          toggleFilterType,
        }}
      >
        {children}
      </RecipesSearcherDispatchContext>
    </RecipesSearcherStateContext>
  )
}

export const useRecipesSearcherState = () => {
  const context = useContext(RecipesSearcherStateContext)

  if (!context)
    throw new Error(
      'useRecipesSearcherState must be used within the scope of RecipesSearcherProvider'
    )

  return context
}

export const useRecipesSearcherDispatch = () => {
  const context = useContext(RecipesSearcherDispatchContext)

  if (!context)
    throw new Error(
      'useRecipesSearcherDispatch must be used within the scope of RecipesSearcherProvider'
    )

  return context
}

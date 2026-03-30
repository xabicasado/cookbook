import type { ReactNode } from 'react'

import type {
  FILTER_BY_INGREDIENTS,
  FILTER_BY_TITLE,
  TOGGLE_FILTER_TYPE,
} from './recipes-searcher-reducer.constants'

import type { Ingredients, Recipes } from '@/src/entities/models/recipe'

export type RecipesSearcherProviderProps = {
  recipes?: Recipes
  children: ReactNode
}

export type RecipesSearcherContextState = {
  recipes: Recipes
  filteredRecipes: Recipes
  ingredients: Ingredients
  isFilteringByIngredients: boolean
  selectedIngredients: Ingredients
  titleFilter: string
}

export type RecipesSearcherReducerAction =
  | {
      type: typeof FILTER_BY_INGREDIENTS
      payload: { selectedIngredients: Ingredients; filteredRecipes: Recipes }
    }
  | {
      type: typeof FILTER_BY_TITLE
      payload: { filteredRecipes: Recipes; searchInput: string }
    }
  | { type: typeof TOGGLE_FILTER_TYPE }

export type RecipesSearcherContextDispatch = {
  filterByIngredients: (ingredientsList: Ingredients) => void
  filterByTitle: (searchInput: string) => void
  toggleFilterType: () => void
}

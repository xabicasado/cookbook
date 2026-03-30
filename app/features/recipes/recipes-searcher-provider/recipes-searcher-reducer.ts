import {
  FILTER_BY_INGREDIENTS,
  FILTER_BY_TITLE,
  TOGGLE_FILTER_TYPE,
} from './recipes-searcher-reducer.constants'
import type {
  RecipesSearcherContextState,
  RecipesSearcherReducerAction,
} from './types'

export const recipesSearcherReducer = (
  state: RecipesSearcherContextState,
  action: RecipesSearcherReducerAction
): RecipesSearcherContextState => {
  switch (action.type) {
    case FILTER_BY_TITLE:
      const { filteredRecipes: filteredByTitleRecipes, searchInput } =
        action.payload
      return {
        ...state,
        filteredRecipes: filteredByTitleRecipes,
        titleFilter: searchInput,
      }

    case FILTER_BY_INGREDIENTS:
      const { selectedIngredients, filteredRecipes } = action.payload

      return {
        ...state,
        selectedIngredients,
        filteredRecipes,
      }

    case TOGGLE_FILTER_TYPE:
      const resetFilteredRecipes = state.recipes

      return {
        ...state,
        filteredRecipes: resetFilteredRecipes,
        isFilteringByIngredients: !state.isFilteringByIngredients,
        selectedIngredients: [],
        titleFilter: '',
      }

    default:
      return state
  }
}

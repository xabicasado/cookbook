import type { IngredientType } from '../types'

import type { Recipes } from '@/src/entities/models/recipe'

export type RecipesProviderPropsType = {
  children: React.ReactNode
  recipes: Recipes
}

export type RecipesContextType = {
  // TODO setFilteredRecipes
  filteredRecipes: Recipes
  searchRecipesByName: (searchInput: string) => void
  searchRecipesByIngredients: (ingredientsList: IngredientType[]) => void
  resetSearch: () => void
}

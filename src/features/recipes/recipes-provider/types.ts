import type { IngredientType, RecipeCardType } from '../types'

export type RecipesProviderPropsType = {
  children: React.ReactNode
  recipes: RecipeCardType[]
}

export type RecipesContextType = {
  filteredRecipes: RecipeCardType[]
  searchRecipesByName: (searchInput: string) => void
  searchRecipesByIngredients: (ingredientsList: IngredientType[]) => void
  resetSearch: () => void
}

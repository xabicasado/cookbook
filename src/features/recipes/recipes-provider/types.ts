import { type ChangeEvent } from 'react'

import type { RecipeCardType } from '../types'

export type RecipesProviderPropsType = {
  children: React.ReactNode
  recipes: RecipeCardType[]
}

export type RecipesContextType = {
  // TODO setFilteredRecipes
  filteredRecipes: RecipeCardType[]
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

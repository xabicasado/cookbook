import type { Ingredient, Ingredients } from '@/src/entities/models/recipe'

export type IngredientsSectionProps = {
  ingredients: Ingredients
  hasDetails?: boolean
  limit?: number
  justify?: 'start' | 'center' | 'end'
  onClick?: (ingredient: Ingredient) => void
}

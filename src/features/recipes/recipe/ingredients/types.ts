import type { IngredientType } from '../types'

export type IngredientsProps = {
  title?: string
  servings?: number
  ingredients: IngredientType[]
}

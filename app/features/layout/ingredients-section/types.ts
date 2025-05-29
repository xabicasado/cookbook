import type { IngredientType } from '@/app/mocks/ingredients.mock'

export type IngredientsSectionProps = {
  ingredients: IngredientType[]
  hasDetails?: boolean
  limit?: number
  justify?: 'start' | 'center' | 'end'
  onClick?: (ingredient: IngredientType) => void
}

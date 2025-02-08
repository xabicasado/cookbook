import type { IngredientType } from '@/mocks/ingredients.mock'

export type IngredientsSectionProps = {
  ingredients: IngredientType[]
  hasDetails?: boolean
  justify?: 'start' | 'center' | 'end'
  onClick?: (ingredient: IngredientType) => void
}

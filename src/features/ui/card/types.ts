import type { IngredientType } from '@/features/recipes/types'

export type CardPropsType = {
  // backgroundColor?: string
  title: string
  href: string
  ingredients: IngredientType[]
}

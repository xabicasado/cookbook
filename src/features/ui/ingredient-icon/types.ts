import { type INGREDIENT_STATUS } from './ingredient-icon.constants'

import type { IngredientType } from '@/features/recipes/types'

export type IngredientIconProps = {
  ingredient: IngredientType
  status?: (typeof INGREDIENT_STATUS)[keyof typeof INGREDIENT_STATUS]
  hasVisibleName?: boolean
  isClosable?: boolean
}

import { type INGREDIENT_STATUS } from './ingredient-icon.constants'

import type { Ingredient } from '@/src/entities/models/recipe'

// export type IngredientStatusType = keyof typeof INGREDIENT_STATUS

export type IngredientIconProps = {
  ingredient: Ingredient
  // status?: (typeof INGREDIENT_STATUS)[IngredientStatusType]
  status?: (typeof INGREDIENT_STATUS)[keyof typeof INGREDIENT_STATUS]
  hasVisibleName?: boolean
  isClosable?: boolean
}

import { type INGREDIENT_STATUS } from './ingredient-icon.constants'

import type { IngredientType } from '@/app/features/recipes/types'

// export type IngredientStatusType = keyof typeof INGREDIENT_STATUS

export type IngredientIconProps = {
  ingredient: IngredientType
  // status?: (typeof INGREDIENT_STATUS)[IngredientStatusType]
  status?: (typeof INGREDIENT_STATUS)[keyof typeof INGREDIENT_STATUS]
  hasVisibleName?: boolean
  isClosable?: boolean
}

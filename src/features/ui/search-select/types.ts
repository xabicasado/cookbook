import type { ChangeEvent } from 'react'

import type { IngredientType } from '@/mocks/ingredients.mock'

export type SearchSelectProps = {
  name: string
  placeholder?: string
  disabled?: boolean
  // TODO Modify to a generic list
  options?: IngredientType[]
  // onChange: (ingredients: IngredientType[]) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

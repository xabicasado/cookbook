import type { ReactNode } from 'react'

import type { Recipes } from '@/src/entities/models/recipe'

export type IngredientsProviderProps = {
  recipes?: Recipes
  children: ReactNode
}

import type { ReactNode } from 'react'

import type { Recipes } from '@/src/entities/models/recipe'

export type RecipesProviderProps = {
  children: ReactNode
  recipesPromise: Promise<Recipes>
}

export type RecipesContextState = {
  recipesPromise: Promise<Recipes>
}

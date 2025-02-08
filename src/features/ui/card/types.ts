import type { ReactNode } from 'react'

import type { IngredientType } from '@/features/recipes/types'

export type CardPropsType = {
  title?: string
  details?: string
  href?: string
  subtitle?: string
  children?: ReactNode
  justify?: 'center' | 'start' | 'end'
  // TODO remove when divided into two types
  slug?: string
  ingredients?: IngredientType[]
}

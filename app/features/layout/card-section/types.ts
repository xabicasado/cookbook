import type { CardProps } from '@/app/features/ui/types'

// import { type RecipeCardType } from '@/features/recipes/types'

export type CardSectionProps = {
  // recipes: RecipeCardType[]
  cards: CardProps[]
  size?: 'small' | 'medium' | 'large'
  justify?: 'center' | 'start' | 'end'
}

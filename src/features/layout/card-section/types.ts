import type { CardPropsType } from '@/features/ui/types'

// import { type RecipeCardType } from '@/features/recipes/types'

export type CardSectionProps = {
  // recipes: RecipeCardType[]
  cards: CardPropsType[]
  size?: 'small' | 'medium' | 'large'
  justify?: 'center' | 'start' | 'end'
}

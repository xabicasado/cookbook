import type { CardProps } from '@/app/features/ui/types'

export type CardSectionProps = {
  cards: CardProps[]
  size?: 'small' | 'medium' | 'large'
  justify?: 'center' | 'start' | 'end'
}

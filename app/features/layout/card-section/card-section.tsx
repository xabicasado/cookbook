import { CardSectionStyled } from './card-section.styled'
import type { CardSectionProps } from './types'

import { Card } from '@/app/features/ui'

export function CardSection({
  cards,
  justify = 'center',
  size = 'large',
}: CardSectionProps) {
  return (
    <CardSectionStyled size={size}>
      {cards?.map((card, index) => (
        <Card key={index} justify={justify} href={card?.href} {...card}>
          {card?.children}
        </Card>
      ))}
    </CardSectionStyled>
  )
}

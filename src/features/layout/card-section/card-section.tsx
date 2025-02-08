import { CardSectionStyled } from './card-section.styled'
import type { CardSectionProps } from './types'

import { IngredientsSection } from '@/features/layout'
import { Card } from '@/features/ui'

export function CardSection({
  cards,
  justify = 'center',
  size = 'large',
}: CardSectionProps) {
  return (
    <CardSectionStyled size={size}>
      {cards?.map((card, index) => (
        <Card
          key={index}
          {...card}
          justify={justify}
          href={card?.slug && `/recipes/${card.slug}`}
        >
          {card?.ingredients ? (
            <IngredientsSection ingredients={card.ingredients} />
          ) : (
            card?.children
          )}
        </Card>
      ))}
    </CardSectionStyled>
  )
}

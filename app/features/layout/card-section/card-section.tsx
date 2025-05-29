import { CARD_INGREDIENTS_ICONS_LIMIT } from './card-section.constants'
import { CardSectionStyled } from './card-section.styled'
import type { CardSectionProps } from './types'

import { IngredientsSection } from '@/app/features/layout'
import { Card } from '@/app/features/ui'

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
            <IngredientsSection
              ingredients={card.ingredients.filter(({ isCommon }) => !isCommon)}
              limit={CARD_INGREDIENTS_ICONS_LIMIT}
            />
          ) : (
            card?.children
          )}
        </Card>
      ))}
    </CardSectionStyled>
  )
}

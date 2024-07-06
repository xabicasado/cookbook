import { CardSectionStyled } from './card-section.styled'
import type { CardSectionProps } from './types'

import { Card } from '@/features/ui'

export function CardSection({ recipes }: CardSectionProps) {
  return (
    <CardSectionStyled>
      {recipes?.map((recipe, index) => (
        <Card
          key={index}
          title={recipe.title}
          ingredients={recipe.ingredients}
          href={`/recipes/${recipe.slug}`}
        />
      ))}
    </CardSectionStyled>
  )
}

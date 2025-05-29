import { IngredientsSectionStyled } from './ingredients-section.styled'
import type { IngredientsSectionProps } from './types'

import { IngredientIcon } from '@/app/features/ui'

export function IngredientsSection({
  ingredients,
  hasDetails = false,
  justify = 'center',
  limit,
  onClick,
}: IngredientsSectionProps) {
  return (
    <IngredientsSectionStyled $justify={justify}>
      {ingredients
        ?.slice(0, limit ?? ingredients.length)
        ?.map((ingredient, index) => (
          <span key={index} onClick={() => onClick && onClick(ingredient)}>
            <IngredientIcon
              ingredient={ingredient}
              hasVisibleName={hasDetails}
              isClosable={hasDetails}
            />
          </span>
        ))}
    </IngredientsSectionStyled>
  )
}

import { INGREDIENTS_ICONS_LIMIT } from './ingredient-section.constants'
import { IngredientsSectionStyled } from './ingredients-section.styled'
import type { IngredientsSectionProps } from './types'

import { IngredientIcon } from '@/features/ui'

export function IngredientsSection({
  ingredients,
  hasDetails = false,
  justify = 'center',
  onClick,
}: IngredientsSectionProps) {
  return (
    <IngredientsSectionStyled justify={justify}>
      {ingredients
        ?.slice(0, INGREDIENTS_ICONS_LIMIT)
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

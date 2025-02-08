import { INGREDIENTS_ICONS_LIMIT } from './ingredient-section.constants'
import { IngredientsSectionStyled } from './ingredients-section.styled'
import type { IngredientsSectionProps } from './types'

import { IngredientIcon } from '@/features/ui'

export function IngredientsSection(props: IngredientsSectionProps) {
  const { ingredients, hasDetails = false, justify = 'center', onClick } = props

  return (
    <IngredientsSectionStyled justify={justify}>
      {ingredients
        ?.slice(0, INGREDIENTS_ICONS_LIMIT)
        ?.map((ingredient, index) => (
          <span key={index} onClick={() => onClick && onClick(ingredient)}>
            <IngredientIcon
              ingredient={ingredient}
              hasVisibleName={!!hasDetails}
              isClosable={!!hasDetails}
            />
          </span>
        ))}
    </IngredientsSectionStyled>
  )
}

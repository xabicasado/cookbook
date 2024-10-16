import { INGREDIENT_STATUS } from './ingredient-icon.constants'
import {
  IngredientIconStyled,
  IngredientNameStyled,
} from './ingredient-icon.styled'
import type { IngredientIconProps } from './types'

export function IngredientIcon(props: IngredientIconProps) {
  const {
    ingredient,
    status = INGREDIENT_STATUS.DEFAULT,
    hasVisibleName,
  } = props
  return (
    <IngredientIconStyled
      role="img"
      aria-label={`Ingrediente ${ingredient.name}`}
      status={status}
      hasVisibleName={!!hasVisibleName}
    >
      {ingredient.emoji}{' '}
      {!!hasVisibleName && (
        <IngredientNameStyled>{ingredient.name}</IngredientNameStyled>
      )}
    </IngredientIconStyled>
  )
}

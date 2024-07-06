import { INGREDIENT_STATUS } from './ingredient-icon.constants'
import { IngredientIconStyled } from './ingredient-icon.styled'
import type { IngredientIconProps } from './types'

export function IngredientIcon(props: IngredientIconProps) {
  const { ingredient, status = INGREDIENT_STATUS.DEFAULT } = props
  // const { ingredient } = props

  // TODO Ingredient name for accesibility
  return (
    <IngredientIconStyled
      // TODO Delete after tests
      // status={
      //   ['default', 'available', 'lacking'][Math.floor(Math.random() * 3)]
      // }
      status={status}
      role="img"
      aria-label={`Ingrediente ${ingredient.name}`}
    >
      {ingredient.emoji}
    </IngredientIconStyled>
  )
}

import { INGREDIENT_STATUS } from './ingredient-icon.constants'
import {
  IngredientEmojiStyled,
  IngredientIconStyled,
  IngredientNameStyled,
} from './ingredient-icon.styled'
import type { IngredientIconProps } from './types'

import { Icon } from '@/features/ui'

export function IngredientIcon(props: IngredientIconProps) {
  const {
    ingredient,
    status = INGREDIENT_STATUS.DEFAULT,
    hasVisibleName = false,
    isClosable = false,
  } = props

  return (
    <IngredientIconStyled
      role="img"
      aria-label={`Ingrediente ${ingredient.name}`}
      hasVisibleName={!!hasVisibleName}
      isClosable={!!isClosable}
    >
      <IngredientEmojiStyled
        // TODO Delete after tests
        // status={
        //   ['default', 'available', 'needToGo', 'lacking'][
        //     Math.floor(Math.random() * 4)
        //   ]
        // }
        status={status}
      >
        {ingredient.emoji}{' '}
      </IngredientEmojiStyled>
      {!!hasVisibleName && (
        <>
          <IngredientNameStyled>{ingredient.name}</IngredientNameStyled>

          {!!isClosable && <Icon name="close" />}
        </>
      )}
    </IngredientIconStyled>
  )
}

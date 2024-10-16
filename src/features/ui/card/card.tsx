import Link from 'next/link'

import { INGREDIENTS_ICONS_LIMIT } from './card.constants'
import {
  CardStyled,
  IngredientsContainerStyled,
  TitleStyled,
} from './card.styled'
import type { CardPropsType } from './types'

import { IngredientIcon } from '@/features/ui'

/**
 * Displays a summary of a recipe and its ingredients as icons
 */
export function Card(props: CardPropsType) {
  const { title, href, ingredients } = props

  return (
    <Link href={href} passHref>
      {/* passHref Seems to improve SEO and accesibility */}
      <CardStyled>
        <TitleStyled>{title}</TitleStyled>
        <IngredientsContainerStyled>
          {ingredients
            .slice(0, INGREDIENTS_ICONS_LIMIT)
            .map((ingredient, position) => (
              <IngredientIcon key={position} ingredient={ingredient} />
            ))}
        </IngredientsContainerStyled>
      </CardStyled>
    </Link>
  )
}

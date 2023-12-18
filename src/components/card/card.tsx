import Link from 'next/link'
import {
  CardContainerStyled,
  TitleStyled,
  IngredientsContainerStyled,
} from './card.styled'
import { IngredientIcon } from '@/components/ingredient-icon'

type CardProps = {
  // backgroundColor?: string
  title: string
  href: string
  ingredients: string[]
}

export function Card({
  // backgroundColor,
  title,
  href,
  ingredients,
  ...props
}: CardProps) {
  return (
    <CardContainerStyled>
      <Link href={href}>
        <TitleStyled>{title}</TitleStyled>
        <IngredientsContainerStyled>
          {ingredients.map((ingredient) => (
            <IngredientIcon
              key={ingredient}
              ingredient={ingredient}
            ></IngredientIcon>
          ))}
        </IngredientsContainerStyled>
      </Link>
    </CardContainerStyled>
  )
}

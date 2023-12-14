import Link from 'next/link'
import {
  CardContainerStyled,
  TitleStyled,
  IngredientStyled,
  IngredientsContainerStyled,
} from './card.styled'

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
            <IngredientStyled key={ingredient}>{ingredient}</IngredientStyled>
          ))}
        </IngredientsContainerStyled>
      </Link>
    </CardContainerStyled>
  )
}

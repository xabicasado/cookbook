import { IngredientIconStyled } from './ingredient-icon.styled'

type IngredientIconProps = {
  ingredient: string
}

// https://dev.to/stephengade/build-a-functional-search-bar-in-nextjs-mig
export function IngredientIcon(props: IngredientIconProps) {
  const { ingredient } = props

  return <IngredientIconStyled>{ingredient}</IngredientIconStyled>
}

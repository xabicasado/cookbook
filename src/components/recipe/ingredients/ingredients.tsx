import { IngredientsContainer, IngredientsTitle } from './ingredients.styled'
import { type IngredientType } from '@/types/recipe.types'

type IngredientsProps = {
  title?: string
  ingredients: IngredientType[]
}

export function Ingredients(props: IngredientsProps) {
  const { title, ingredients } = props

  return (
    <IngredientsContainer>
      <IngredientsTitle>{title ?? 'Ingredientes'}</IngredientsTitle>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {/* {ingredient?.emoji}{' '}  */}
            {ingredient?.quantity ?? ''} {ingredient?.measurement ?? ''}{' '}
            {ingredient?.name} {ingredient?.details ?? ''}
          </li>
        ))}
      </ul>
    </IngredientsContainer>
  )
}

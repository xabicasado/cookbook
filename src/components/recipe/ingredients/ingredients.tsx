import { type IngredientType } from '@/types/recipe.types'
import {
  RecipeSectionStyled,
  RecipeSectionContentStyled,
} from '../recipe.styled'

type IngredientsProps = {
  title?: string
  ingredients: IngredientType[]
}

export function Ingredients(props: IngredientsProps) {
  const { title, ingredients } = props

  return (
    <RecipeSectionStyled>
      <h3>{title ?? 'Ingredientes'}</h3>
      {/* TODO Raciones: multiplica o divide cantidades */}
      <RecipeSectionContentStyled>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {/* {ingredient?.emoji}{' '}  */}
              {ingredient?.quantity ?? ''} {ingredient?.measurement ?? ''}{' '}
              {ingredient?.name} {ingredient?.details ?? ''}
            </li>
          ))}
        </ul>
      </RecipeSectionContentStyled>
    </RecipeSectionStyled>
  )
}

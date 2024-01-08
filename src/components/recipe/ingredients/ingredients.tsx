import { useState } from 'react'

import { Button } from '@/components/button'
import {
  ButtonContainerStyled,
  ButtonStyled,
  RecipeSectionStyled,
  RecipeSectionContentStyled,
} from '../recipe.styled'
import { type IngredientType } from '@/types/recipe.types'
// import { decimalToFraction } from '@/utils/commons'

type IngredientsProps = {
  title?: string
  servings?: number
  ingredients: IngredientType[]
}

const DEFAULT_SERVINGS = 2

export function Ingredients(props: IngredientsProps) {
  const { title, servings = DEFAULT_SERVINGS, ingredients } = props

  const [currentServings, setCurrentServings] = useState<number>(servings)

  const displayQuantity = (quantity: number): number =>
    // ((quantity * currentServings) / servings).toFixed(2).replace(/[.,]0+$/, '')
    // decimalToFraction(
    Math.round(((quantity * currentServings) / servings) * 100) / 100
  // )

  const handleRemoveServing = () => {
    if (currentServings > 1) setCurrentServings(currentServings - 1)
  }

  const handleAddServing = () => {
    setCurrentServings(currentServings + 1)
  }

  return (
    <RecipeSectionStyled>
      <h3>{title ?? 'Ingredientes'}</h3>

      <ButtonContainerStyled>
        <ButtonStyled>
          <Button
            // primary
            size={'small'}
            label={'Quitar ración'}
            icon={'remove'}
            onClick={handleRemoveServing}
          ></Button>
        </ButtonStyled>

        <ButtonStyled>
          <span>{currentServings}</span>
        </ButtonStyled>

        <ButtonStyled>
          <Button
            // primary
            size={'small'}
            label={'Añadir ración'}
            icon={'add'}
            onClick={handleAddServing}
          ></Button>
        </ButtonStyled>
      </ButtonContainerStyled>

      <RecipeSectionContentStyled>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {/* {ingredient?.emoji}{' '}  */}
              {ingredient?.quantity != null
                ? displayQuantity(+ingredient?.quantity)
                : ''}{' '}
              {ingredient?.measurement ?? ''} {ingredient?.name}{' '}
              {ingredient?.details ?? ''}
            </li>
          ))}
        </ul>
      </RecipeSectionContentStyled>
    </RecipeSectionStyled>
  )
}

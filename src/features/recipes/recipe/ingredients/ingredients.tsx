import { useState } from 'react'

import { DEFAULT_SERVINGS } from './ingredients.constants'
import { ServingsSectionStyled } from './ingredients.styled'
import type { IngredientsProps } from './types'

import { Button } from '@/features/ui'
import { decimalToFraction } from '@/utils/commons'

export function Ingredients(props: IngredientsProps) {
  const { title, servings = DEFAULT_SERVINGS, ingredients } = props

  // TODO Do not calculate if not quantity ingredients
  const [currentServings, setCurrentServings] = useState<number>(servings)

  // TODO Import to context and calculate async
  const displayQuantity = (quantity: number): string =>
    decimalToFraction(
      Math.round(((quantity * currentServings) / servings) * 100) / 100
    )

  const handleRemoveServing = () => {
    if (currentServings > 1) setCurrentServings(currentServings - 1)
  }

  const handleAddServing = () => {
    setCurrentServings(currentServings + 1)
  }

  return (
    <section>
      <h3>{title ?? 'Ingredientes'}</h3>

      <ServingsSectionStyled>
        <Button
          // primary
          size={'small'}
          label={'Quitar ración'}
          icon={'remove'}
          onClick={handleRemoveServing}
        ></Button>

        <span>{currentServings}</span>

        <Button
          // primary
          size={'small'}
          label={'Añadir ración'}
          icon={'add'}
          onClick={handleAddServing}
        ></Button>
      </ServingsSectionStyled>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {/* {ingredient?.emoji}{' '}  */}
            {/* TODO Add toggle 'fraction / decimals' */}
            {ingredient?.quantity != null
              ? displayQuantity(+ingredient?.quantity)
              : ''}{' '}
            {ingredient?.measurement ?? ''} {ingredient?.name}{' '}
            {ingredient?.details ?? ''}
          </li>
        ))}
      </ul>
    </section>
  )
}

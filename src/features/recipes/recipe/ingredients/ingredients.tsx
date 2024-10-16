import { useMemo, useState } from 'react'

import { SectionTitleStyled } from '../recipe.styled'
import { DEFAULT_SERVINGS } from './ingredients.constants'
import {
  ServingsDisplayStyled,
  ServingsSectionStyled,
} from './ingredients.styled'
import type { IngredientsProps } from './types'

import { Button } from '@/features/ui'
import { decimalToFraction } from '@/utils/commons'

export function Ingredients(props: IngredientsProps) {
  const { title, servings = DEFAULT_SERVINGS, ingredients } = props
  const [currentServings, setCurrentServings] = useState<number>(servings)

  const hasQuantities = ingredients.some(
    (ingredient) => ingredient.quantity !== undefined
  )

  const displayQuantity = useMemo(() => {
    return (quantity: number): string =>
      decimalToFraction(
        Math.round(((quantity * currentServings) / servings) * 100) / 100
      )
  }, [currentServings, servings])

  const handleRemoveServing = () => {
    if (currentServings > 1) setCurrentServings(currentServings - 1)
  }

  const handleAddServing = () => {
    setCurrentServings(currentServings + 1)
  }

  return (
    <>
      <SectionTitleStyled>{title ?? 'Ingredientes'}</SectionTitleStyled>

      {hasQuantities && (
        <ServingsSectionStyled>
          <Button
            size="small"
            justify="start"
            beforeIcon="remove"
            onClick={handleRemoveServing}
            disabled={!(currentServings > 1)}
          />

          <ServingsDisplayStyled>{currentServings}</ServingsDisplayStyled>

          <Button
            size="small"
            justify="start"
            beforeIcon="add"
            onClick={handleAddServing}
          />
        </ServingsSectionStyled>
      )}

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient?.quantity != null
              ? displayQuantity(+ingredient?.quantity)
              : ''}{' '}
            {ingredient?.measurement ?? ''} {ingredient?.name}{' '}
            {ingredient?.details ?? ''}
          </li>
        ))}
      </ul>
    </>
  )
}

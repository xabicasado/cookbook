import { useServingsContext } from '../../servings-provider'
import { compareByQuantity } from '../recipe.utils'
import { IngredientStyled } from './ingredients.styled'
import type { IngredientsProps } from './types'

import { ListSection, PageSection } from '@/app/features/layout'

import { IngredientQuantity } from '@/src/entities/models/recipe'

export function Ingredients({ servings, ingredients }: IngredientsProps) {
  const { currentServings } = useServingsContext()

  return (
    <PageSection title="Ingredientes">
      <ListSection size="large">
        {ingredients.sort(compareByQuantity).map((ingredient, index) => (
          <IngredientStyled key={index}>
            <span>
              {ingredient?.emoji ?? ''} {ingredient?.name}{' '}
              {ingredient?.details ?? ''}
            </span>

            <span>
              {ingredient?.quantity
                ? IngredientQuantity.display(
                    +ingredient?.quantity,
                    currentServings,
                    servings,
                    false
                  )
                : ''}{' '}
              {ingredient?.quantity && !ingredient?.measurement
                ? 'unidad'
                : (ingredient?.measurement ?? '')}
            </span>
          </IngredientStyled>
        ))}
      </ListSection>
    </PageSection>
  )
}

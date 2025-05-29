import { useServingsContext } from '../../servings-provider'
import { compareByQuantity, displayQuantity } from '../recipe.utils'
import { IngredientStyled } from './ingredients.styled'
import type { IngredientsProps } from './types'

import { ListSection, PageSection } from '@/app/features/layout'

export function Ingredients({ servings, ingredients }: IngredientsProps) {
  const { currentServings } = useServingsContext()

  return (
    <PageSection title="Ingredientes">
      <ListSection size="large">
        {ingredients.sort(compareByQuantity).map((ingredient, index) => (
          <IngredientStyled key={index}>
            <span>
              {ingredient?.emoji ?? ''} {ingredient?.name}{' '}
            </span>
            <span>
              {ingredient?.quantity != null
                ? displayQuantity(
                    +ingredient?.quantity,
                    currentServings,
                    servings,
                    false
                  )
                : ''}{' '}
              {ingredient?.quantity && !ingredient?.measurement
                ? 'unidad'
                : ingredient?.measurement ?? ''}{' '}
              {ingredient?.details ?? ''}
            </span>
          </IngredientStyled>
        ))}
      </ListSection>
    </PageSection>
  )
}

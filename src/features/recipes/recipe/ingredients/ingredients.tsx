import { displayQuantity } from '../recipe.utils'
import type { IngredientsProps } from './types'

import { ListSection, PageSection } from '@/features/layout'

export function Ingredients({
  servings,
  currentServings,
  ingredients,
}: IngredientsProps) {
  return (
    <PageSection title="Ingredientes">
      <ListSection size="small">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient?.quantity != null
              ? displayQuantity(
                  +ingredient?.quantity,
                  currentServings,
                  servings
                )
              : ''}{' '}
            {ingredient?.measurement ?? ''} {ingredient?.name}{' '}
            {ingredient?.details ?? ''}
          </li>
        ))}
      </ListSection>
    </PageSection>
  )
}

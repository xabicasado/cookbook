import { displayQuantity } from '../recipe.utils'
import type { IngredientsProps } from './types'

import { PageSection } from '@/features/layout'

export function Ingredients({
  servings,
  currentServings,
  ingredients,
}: IngredientsProps) {
  return (
    <PageSection title="Ingredientes">
      {/* TODO Check generic <ul> line-height */}
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {/* TODO Add toggle 'fraction / decimals' */}
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
      </ul>
    </PageSection>
  )
}

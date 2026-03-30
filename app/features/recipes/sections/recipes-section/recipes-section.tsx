'use client'

import {
  BASE_URL,
  CARD_INGREDIENTS_ICONS_LIMIT,
} from './recipes-section.constants'

import { CardSection, IngredientsSection } from '@/app/features/layout'
import { useRecipesSearcherState } from '@/app/features/recipes'
import { Button } from '@/app/features/ui'

export function RecipesSection() {
  const { filteredRecipes } = useRecipesSearcherState()

  return (
    <>
      {filteredRecipes?.length === 0 ? (
        <Button label="Añadir nueva receta" primary fullWidth disabled />
      ) : (
        <CardSection
          cards={filteredRecipes.map(({ title, slug, ingredients }) => ({
            title: title,
            href: `${BASE_URL}/${slug}`,
            children: (
              <IngredientsSection
                ingredients={ingredients.filter(({ isCommon }) => !isCommon)}
                limit={CARD_INGREDIENTS_ICONS_LIMIT}
              />
            ),
          }))}
        />
      )}
    </>
  )
}

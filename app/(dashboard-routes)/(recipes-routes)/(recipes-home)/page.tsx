import {
  IngredientsProvider,
  RecipesSearcherProvider,
  RecipesSection,
  SearcherSection,
} from '@/app/features/recipes'

import { getServerInjection } from '@/di/server/container'
import type { Recipes } from '@/src/entities/models/recipe'

async function getRecipes() {
  try {
    const getRecipesController = getServerInjection('IGetRecipesController')

    return await getRecipesController()
  } catch (error) {
    throw error
  }
}

export default async function RecipesHomePage() {
  let recipes: Recipes

  try {
    recipes = await getRecipes()
  } catch (error) {
    throw error
  }

  return (
    <IngredientsProvider recipes={recipes}>
      <RecipesSearcherProvider recipes={recipes}>
        <h2>Inventario de recetas</h2>

        <SearcherSection />
        <RecipesSection />
      </RecipesSearcherProvider>
    </IngredientsProvider>
  )
}

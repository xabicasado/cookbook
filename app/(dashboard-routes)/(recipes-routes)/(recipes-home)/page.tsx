import { RecipesProvider, RecipesSection } from '@/app/features/recipes'

import { getInjection } from '@/di/container'
import type { Recipes } from '@/src/entities/models/recipe'

export async function getRecipes() {
  try {
    const getRecipesController = getInjection('IGetRecipesController')

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
    <RecipesProvider recipes={recipes}>
      <h2>Inventario de recetas</h2>

      <RecipesSection />
    </RecipesProvider>
  )
}

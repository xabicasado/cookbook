import { retrieveRecipes } from '@/app/actions'
import { RecipesProvider, RecipesSection } from '@/features/recipes'
import type { RecipeCardType } from '@/features/recipes/types'

export default async function RecipesHomePage() {
  const response = await retrieveRecipes()
  const recipes: RecipeCardType[] = await response.json()

  return (
    <RecipesProvider recipes={recipes}>
      <h2>Inventario de recetas</h2>

      <RecipesSection />
    </RecipesProvider>
  )
}

import type { Recipe, Recipes } from '@/src/entities/models/recipe'

export type IRecipesRepository = {
  getRecipes(): Promise<Recipes>
  getRecipeBySlug(slug: string): Promise<Recipe>
}

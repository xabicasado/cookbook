import type {
  Recipe,
  RecipeInsert,
  Recipes,
} from '@/src/entities/models/recipe'

export interface IRecipesRepository {
  getRecipes(): Promise<Recipes>
  getRecipeBySlug(slug: string): Promise<Recipe>
}

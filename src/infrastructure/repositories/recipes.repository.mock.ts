import type { IRecipesRepository } from '@/src/application/repositories/recipes.repository.interface'
import type { Recipe, Recipes } from '@/src/entities/models/recipe'
import { recipeSchema } from '@/src/entities/models/recipe'

export class MockRecipesRepository implements IRecipesRepository {
  private _recipes: Recipes

  constructor() {
    this._recipes = []
  }

  async getRecipes(): Promise<Recipes> {
    return this._recipes
  }

  async getRecipeBySlug(slug: string): Promise<Recipe> {
    const recipe = this._recipes.filter((r) => r.slug === slug)

    return recipeSchema.parse(recipe)
  }
}

import type { IRecipesRepository } from '@/src/application/repositories/recipes.respository.interface'
import type {
  Recipe,
  Recipes} from '@/src/entities/models/recipe';
import {
  recipeSchema,
  recipesSchema,
} from '@/src/entities/models/recipe'

export class MockRecipesRepository implements IRecipesRepository {
  private _recipes: Recipe[]

  constructor() {
    this._recipes = []
  }

  async getRecipes(): Promise<Recipes> {
    return Promise.resolve(recipesSchema.parse(this._recipes))
  }

  getRecipeBySlug(slug: string): Promise<Recipe> {
    const recipe = this._recipes.filter((r) => r.slug === slug)

    return Promise.resolve(recipeSchema.parse(recipe))
  }
}

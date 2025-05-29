import type { IRecipesRepository } from '@/src/application/repositories/recipes.respository.interface'
import type {
  Recipe,
  Recipes} from '@/src/entities/models/recipe';
import {
  recipeSchema,
  recipesSchema,
} from '@/src/entities/models/recipe'
import { mapPostgrestErrorToDomainError } from '@/supabase/utils/errors'
import { createClient } from '@/supabase/utils/server'

export class RecipesRepository implements IRecipesRepository {
  constructor() {}

  async getRecipes(): Promise<Recipes> {
    const db = await createClient()

    const query = db
      .from('recipes')
      .select('title, slug, ingredients')
      .order('title')

    const { data: recipes } = await query

    return recipesSchema.parse(recipes)
  }

  async getRecipeBySlug(slug: string): Promise<Recipe> {
    const db = await createClient()

    const query = db.from('recipes').select().eq('slug', slug).single()

    const { data: recipe, error } = await query

    if (error) throw mapPostgrestErrorToDomainError(error)

    return recipeSchema.parse(recipe)
  }
}

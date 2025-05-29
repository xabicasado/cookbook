import type { IGetRecipeBySlugUseCase } from '@/src/application/use-cases/recipes/get-recipe-by-slug.use-case'
import type { Recipe } from '@/src/entities/models/recipe'

function presenter(recipe: Recipe) {
  return {
    id: recipe.id,
    created_at: recipe.created_at,
    title: recipe.title,
    slug: recipe.slug,
    servings: recipe.servings,
    source: recipe.source,
    ingredients: recipe.ingredients,
    steps: recipe.steps,
    tips: recipe.tips,
  }
}

export type IGetRecipeBySlugController = ReturnType<
  typeof getRecipeBySlugController
>

export const getRecipeBySlugController =
  (getRecipeBySlugUseCase: IGetRecipeBySlugUseCase) =>
  async (slug: string): Promise<ReturnType<typeof presenter>> => {
    const recipe = await getRecipeBySlugUseCase(slug)

    return presenter(recipe)
  }

import type { IGetRecipesUseCase } from '@/src/application/use-cases/recipes/get-recipes.use-case'
import type { Recipes } from '@/src/entities/models/recipe'

function presenter(recipes: Recipes) {
  return recipes.map((recipe) => ({
    title: recipe.title,
    slug: recipe.slug,
    ingredients: recipe.ingredients,
  }))
}

export type IGetRecipesController = ReturnType<typeof getRecipesController>

export const getRecipesController =
  (getRecipesUseCase: IGetRecipesUseCase) =>
  async (): Promise<ReturnType<typeof presenter>> => {
    const recipes = await getRecipesUseCase()

    return presenter(recipes)
  }

import type { IFilterRecipesByIngredientsUseCase } from '@/src/application/use-cases/recipes/filter-recipes-by-ingredients.use-case'
import type { Ingredients, Recipes } from '@/src/entities/models/recipe'

function presenter(recipes: Recipes) {
  return recipes.map((recipe) => ({
    title: recipe.title,
    slug: recipe.slug,
    ingredients: recipe.ingredients,
  }))
}

export type IFilterRecipesByIngredientsController = ReturnType<
  typeof filterRecipesByIngredientsController
>

export const filterRecipesByIngredientsController =
  (filterRecipesByIngredientsUseCase: IFilterRecipesByIngredientsUseCase) =>
  (
    recipes: Recipes,
    ingredients: Ingredients
  ): ReturnType<typeof presenter> => {
    const filtered = filterRecipesByIngredientsUseCase(recipes, ingredients)

    return presenter(filtered)
  }

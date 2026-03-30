import type { Ingredients, Recipes } from '@/src/entities/models/recipe'

export type IFilterRecipesByIngredientsUseCase =
  typeof filterRecipesByIngredientsUseCase

export const filterRecipesByIngredientsUseCase = (
  recipes: Recipes,
  ingredients: Ingredients
) => {
  if (!ingredients?.length) return recipes

  return recipes.filter((recipe) =>
    ingredients.every((ingredient) =>
      recipe.ingredients.some(
        (recipeIngredient) => recipeIngredient.name === ingredient.name
      )
    )
  )
}

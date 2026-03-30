import type { IGetRecipesIngredientsUseCase } from '@/src/application/use-cases/recipes/get-recipes-ingredients.use-case'
import type { Ingredients, Recipes } from '@/src/entities/models/recipe'

function presenter(ingredients: Ingredients) {
  return ingredients.map((ingredient) => ({
    name: ingredient.name,
    emoji: ingredient.emoji,
    isCommon: ingredient.isCommon,
  }))
}

export type IGetRecipesIngredientsController = ReturnType<
  typeof getRecipesIngredientsController
>

export const getRecipesIngredientsController =
  (getRecipesIngredientsUseCase: IGetRecipesIngredientsUseCase) =>
  (recipes: Recipes): ReturnType<typeof presenter> => {
    const ingredients = getRecipesIngredientsUseCase(recipes)

    return presenter(ingredients)
  }

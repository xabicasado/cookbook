import { compareByName } from '@/app/features/recipes'

import type { Ingredient, Ingredients } from '@/src/entities/models/recipe'
import { type Recipes } from '@/src/entities/models/recipe'

export type IGetRecipesIngredientsUseCase = typeof getRecipesIngredientsUseCase

export const getRecipesIngredientsUseCase = (recipes: Recipes): Ingredients => {
  const uniqueIngredients: Ingredients = []
  const ingredientMap = new Map<string, Ingredient>()

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const ingredientKey = ingredient.name

      if (!ingredient.isCommon && !ingredientMap.has(ingredientKey)) {
        uniqueIngredients.push(ingredient)
        ingredientMap.set(ingredientKey, ingredient)
      }
    })
  })

  uniqueIngredients.sort(compareByName)

  return uniqueIngredients
}

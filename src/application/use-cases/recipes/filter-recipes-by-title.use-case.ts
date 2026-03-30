import { type Recipes, RecipeTitle } from '@/src/entities/models/recipe'

export type IFilterRecipesByTitleUseCase = typeof filterRecipesByTitleUseCase

export const filterRecipesByTitleUseCase = (
  recipes: Recipes,
  words: string[]
): Recipes => {
  if (!words) return recipes

  return recipes?.filter((r) =>
    words.every((word) => RecipeTitle.normalize(r.title).includes(word))
  )
}

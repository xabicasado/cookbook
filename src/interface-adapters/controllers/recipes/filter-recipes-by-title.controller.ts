import { z } from 'zod'

import type { IFilterRecipesByTitleUseCase } from '@/src/application/use-cases/recipes/filter-recipes-by-title.use-case'
import { InputParseError } from '@/src/entities/errors/common'
import { type Recipes, RecipeTitle } from '@/src/entities/models/recipe'

function presenter(recipes: Recipes) {
  return recipes.map((recipe) => ({
    title: recipe.title,
    slug: recipe.slug,
    ingredients: recipe.ingredients,
  }))
}

const inputSchema = z.string() //.min(1)

export type IFilterRecipesByTitleController = ReturnType<
  typeof filterRecipesByTitleController
>

export const filterRecipesByTitleController =
  (filterRecipesByTitleUseCase: IFilterRecipesByTitleUseCase) =>
  (
    recipes: Recipes,
    input: Partial<z.infer<typeof inputSchema>>
  ): ReturnType<typeof presenter> => {
    const { data: searchInput, error: inputParseError } =
      inputSchema.safeParse(input)

    if (inputParseError)
      throw new InputParseError('Invalid data', { cause: inputParseError })

    const wordsFromInput = RecipeTitle.normalize(searchInput).split(' ')

    const filtered = filterRecipesByTitleUseCase(recipes, wordsFromInput)

    return presenter(filtered)
  }

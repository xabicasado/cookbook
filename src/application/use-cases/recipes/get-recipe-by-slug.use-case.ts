import type { IRecipesRepository } from '@/src/application/repositories/recipes.respository.interface'
import type { Recipe } from '@/src/entities/models/recipe'

export type IGetRecipeBySlugUseCase = ReturnType<typeof getRecipeBySlugUseCase>

export const getRecipeBySlugUseCase =
  (recipesRepository: IRecipesRepository) =>
  async (slug: string): Promise<Recipe> => {
    const recipe = await recipesRepository.getRecipeBySlug(slug)

    return recipe
  }

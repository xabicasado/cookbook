import type { IRecipesRepository } from '@/src/application/repositories/recipes.respository.interface'
import type { Recipes } from '@/src/entities/models/recipe'

export type IGetRecipesUseCase = ReturnType<typeof getRecipesUseCase>

export const getRecipesUseCase =
  (recipesRepository: IRecipesRepository) => async (): Promise<Recipes> =>
    await recipesRepository.getRecipes()

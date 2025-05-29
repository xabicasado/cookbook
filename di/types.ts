import type { IRecipesRepository } from '@/src/application/repositories/recipes.respository.interface'
import type { IGetRecipeBySlugUseCase } from '@/src/application/use-cases/recipes/get-recipe-by-slug.use-case'
import type { IGetRecipesUseCase } from '@/src/application/use-cases/recipes/get-recipes.use-case'
import type { IGetRecipeBySlugController } from '@/src/interface-adapters/controllers/recipes/get-recipe-by-slug.controller'
import type { IGetRecipesController } from '@/src/interface-adapters/controllers/recipes/get-recipes.controller'

export const DI_SYMBOLS = {
  // Repositories
  IRecipesRepository: Symbol.for('IRecipesRepository'),

  // Use Cases
  IGetRecipesUseCase: Symbol.for('IGetRecipesUseCase'),
  IGetRecipeBySlugUseCase: Symbol.for('IGetRecipeBySlugUseCase'),

  // Controllers
  IGetRecipesController: Symbol.for('IGetRecipesController'),
  IGetRecipeBySlugController: Symbol.for('IGetRecipeBySlugController'),
}

export type DI_RETURN_TYPES = {
  // Repositories
  IRecipesRepository: IRecipesRepository

  // Use Cases
  IGetRecipesUseCase: IGetRecipesUseCase
  IGetRecipeBySlugUseCase: IGetRecipeBySlugUseCase

  // Controllers
  IGetRecipesController: IGetRecipesController
  IGetRecipeBySlugController: IGetRecipeBySlugController
}

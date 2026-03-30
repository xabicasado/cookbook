import type { IRecipesRepository } from '@/src/application/repositories/recipes.repository.interface'
import type { IFilterRecipesByIngredientsUseCase } from '@/src/application/use-cases/recipes/filter-recipes-by-ingredients.use-case'
import type { IFilterRecipesByTitleUseCase } from '@/src/application/use-cases/recipes/filter-recipes-by-title.use-case'
import type { IGetRecipeBySlugUseCase } from '@/src/application/use-cases/recipes/get-recipe-by-slug.use-case'
import type { IGetRecipesIngredientsUseCase } from '@/src/application/use-cases/recipes/get-recipes-ingredients.use-case'
import type { IGetRecipesUseCase } from '@/src/application/use-cases/recipes/get-recipes.use-case'
import type { IFilterRecipesByIngredientsController } from '@/src/interface-adapters/controllers/recipes/filter-recipes-by-ingredients.controller'
import type { IFilterRecipesByTitleController } from '@/src/interface-adapters/controllers/recipes/filter-recipes-by-title.controller'
import type { IGetRecipeBySlugController } from '@/src/interface-adapters/controllers/recipes/get-recipe-by-slug.controller'
import type { IGetRecipesIngredientsController } from '@/src/interface-adapters/controllers/recipes/get-recipes-ingredients.controller'
import type { IGetRecipesController } from '@/src/interface-adapters/controllers/recipes/get-recipes.controller'

export const DI_SYMBOLS = {
  // Repositories
  IRecipesRepository: Symbol.for('IRecipesRepository'),

  // Use Cases
  IFilterRecipesByIngredientsUseCase: Symbol.for(
    'IFilterRecipesByIngredientsUseCase'
  ),
  IFilterRecipesByTitleUseCase: Symbol.for('IFilterRecipesByTitleUseCase'),
  IGetRecipesUseCase: Symbol.for('IGetRecipesUseCase'),
  IGetRecipeBySlugUseCase: Symbol.for('IGetRecipeBySlugUseCase'),
  IGetRecipesIngredientsUseCase: Symbol.for('IGetRecipesIngredientsUseCase'),

  // Controllers
  IFilterRecipesByIngredientsController: Symbol.for(
    'IFilterRecipesByIngredientsController'
  ),
  IFilterRecipesByTitleController: Symbol.for(
    'IFilterRecipesByTitleController'
  ),
  IGetRecipesController: Symbol.for('IGetRecipesController'),
  IGetRecipeBySlugController: Symbol.for('IGetRecipeBySlugController'),
  IGetRecipesIngredientsController: Symbol.for(
    'IGetRecipesIngredientsController'
  ),
}

export type DI_RETURN_TYPES = {
  // Repositories
  IRecipesRepository: IRecipesRepository

  // Use Cases
  IFilterRecipesByTitleUseCase: IFilterRecipesByTitleUseCase
  IFilterRecipesByIngredientsUseCase: IFilterRecipesByIngredientsUseCase
  IGetRecipesUseCase: IGetRecipesUseCase
  IGetRecipeBySlugUseCase: IGetRecipeBySlugUseCase
  IGetRecipesIngredientsUseCase: IGetRecipesIngredientsUseCase

  // Controllers
  IGetRecipesController: IGetRecipesController
  IGetRecipeBySlugController: IGetRecipeBySlugController
  IGetRecipesIngredientsController: IGetRecipesIngredientsController
  IFilterRecipesByIngredientsController: IFilterRecipesByIngredientsController
  IFilterRecipesByTitleController: IFilterRecipesByTitleController
}

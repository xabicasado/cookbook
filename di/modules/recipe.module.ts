import { createModule } from '@evyweb/ioctopus'

import { DI_SYMBOLS } from '@/di/types'
import { getRecipeBySlugUseCase } from '@/src/application/use-cases/recipes/get-recipe-by-slug.use-case'
import { getRecipesUseCase } from '@/src/application/use-cases/recipes/get-recipes.use-case'
import { RecipesRepository } from '@/src/infrastructure/repositories/recipes.repository'
import { MockRecipesRepository } from '@/src/infrastructure/repositories/recipes.repository.mock'
import { getRecipeBySlugController } from '@/src/interface-adapters/controllers/recipes/get-recipe-by-slug.controller'
import { getRecipesController } from '@/src/interface-adapters/controllers/recipes/get-recipes.controller'

export function createRecipesModule() {
  const recipesModule = createModule()

  if (process.env.NODE_ENV === 'test') {
    recipesModule
      .bind(DI_SYMBOLS.IRecipesRepository)
      .toClass(MockRecipesRepository)
  } else {
    recipesModule.bind(DI_SYMBOLS.IRecipesRepository).toClass(RecipesRepository)
  }

  recipesModule
    .bind(DI_SYMBOLS.IGetRecipesUseCase)
    .toHigherOrderFunction(getRecipesUseCase, [DI_SYMBOLS.IRecipesRepository])

  recipesModule
    .bind(DI_SYMBOLS.IGetRecipeBySlugUseCase)
    .toHigherOrderFunction(getRecipeBySlugUseCase, [
      DI_SYMBOLS.IRecipesRepository,
    ])

  recipesModule
    .bind(DI_SYMBOLS.IGetRecipesController)
    .toHigherOrderFunction(getRecipesController, [
      DI_SYMBOLS.IGetRecipesUseCase,
    ])

  recipesModule
    .bind(DI_SYMBOLS.IGetRecipeBySlugController)
    .toHigherOrderFunction(getRecipeBySlugController, [
      DI_SYMBOLS.IGetRecipeBySlugUseCase,
    ])

  return recipesModule
}

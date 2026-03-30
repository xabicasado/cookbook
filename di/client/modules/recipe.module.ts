import { createModule } from '@evyweb/ioctopus'

import { DI_SYMBOLS } from '@/di/types'
import { filterRecipesByIngredientsUseCase } from '@/src/application/use-cases/recipes/filter-recipes-by-ingredients.use-case'
import { filterRecipesByTitleUseCase } from '@/src/application/use-cases/recipes/filter-recipes-by-title.use-case'
import { getRecipesIngredientsUseCase } from '@/src/application/use-cases/recipes/get-recipes-ingredients.use-case'
import { filterRecipesByIngredientsController } from '@/src/interface-adapters/controllers/recipes/filter-recipes-by-ingredients.controller'
import { filterRecipesByTitleController } from '@/src/interface-adapters/controllers/recipes/filter-recipes-by-title.controller'
import { getRecipesIngredientsController } from '@/src/interface-adapters/controllers/recipes/get-recipes-ingredients.controller'

export function createRecipesModule() {
  const recipesModule = createModule()

  recipesModule
    .bind(DI_SYMBOLS.IFilterRecipesByTitleUseCase)
    .toFunction(filterRecipesByTitleUseCase)

  recipesModule
    .bind(DI_SYMBOLS.IFilterRecipesByIngredientsUseCase)
    .toFunction(filterRecipesByIngredientsUseCase)

  recipesModule
    .bind(DI_SYMBOLS.IGetRecipesIngredientsUseCase)
    .toFunction(getRecipesIngredientsUseCase)

  recipesModule
    .bind(DI_SYMBOLS.IFilterRecipesByTitleController)
    .toHigherOrderFunction(filterRecipesByTitleController, [
      DI_SYMBOLS.IFilterRecipesByTitleUseCase,
    ])

  recipesModule
    .bind(DI_SYMBOLS.IFilterRecipesByIngredientsController)
    .toHigherOrderFunction(filterRecipesByIngredientsController, [
      DI_SYMBOLS.IFilterRecipesByIngredientsUseCase,
    ])

  recipesModule
    .bind(DI_SYMBOLS.IGetRecipesIngredientsController)
    .toHigherOrderFunction(getRecipesIngredientsController, [
      DI_SYMBOLS.IGetRecipesIngredientsUseCase,
    ])

  return recipesModule
}

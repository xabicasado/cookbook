import { createContainer } from '@evyweb/ioctopus'

import { createRecipesModule } from '@/di/modules/recipe.module'
import type { DI_RETURN_TYPES} from '@/di/types';
import { DI_SYMBOLS } from '@/di/types'

const ApplicationContainer = createContainer()

ApplicationContainer.load(Symbol('RecipesModule'), createRecipesModule())

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K
): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol])
}

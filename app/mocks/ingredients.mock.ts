// import { type IngredientType } from '@/features/recipes/types'
import { compareByName } from '@/app/features/recipes/recipe/recipe.utils'

import type { Ingredient } from '@/src/entities/models/recipe'

export type IngredientType = {
  emoji: string
  name: string
  measurement?: string // TODO Define measurement[]
  isCommon?: boolean // TODO Default false don't show on Card
  details?: string // TODO Define enums 'grande' | 'pequeño'

  // quantity?: string
  // alternative?: string
  // recommendation?: string
}

const ingredientsMock: Ingredient[] = [
  {
    emoji: '🥑',
    name: 'aguacate',
    isCommon: false,
  },
  {
    emoji: '🍌',
    name: 'plátano',
    isCommon: false,
  },
  {
    emoji: '🍏',
    name: 'manzana',
    isCommon: false,
  },
  {
    emoji: '🥛',
    name: 'bebida de almendra',
    isCommon: false,
  },
  {
    emoji: '🧅',
    name: 'cebolla',
    isCommon: false,
  },
  {
    emoji: '🧄',
    name: 'ajo',
    isCommon: false,
  },
  {
    emoji: '🫒',
    name: 'aceite de oliva',
    isCommon: true,
  },
  {
    emoji: '🌾',
    name: 'harina de trigo',
    isCommon: true,
  },
  {
    emoji: '💧',
    name: 'agua',
    isCommon: true,
  },
  {
    emoji: '🌿',
    name: 'perejil',
    isCommon: true,
  },
  {
    emoji: '🧂',
    name: 'sal',
    isCommon: true,
  },
]

export default ingredientsMock?.sort(compareByName)

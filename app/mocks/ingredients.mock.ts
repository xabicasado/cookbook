// import { type IngredientType } from '@/features/recipes/types'
import { compareByName } from '@/app/features/recipes/recipe/recipe.utils'

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

const ingredientsMock: IngredientType[] = [
  {
    emoji: '🥑',
    name: 'aguacate',
  },
  {
    emoji: '🍌',
    name: 'plátano',
  },
  {
    emoji: '🍏',
    name: 'manzana',
  },
  {
    emoji: '🥛',
    name: 'bebida de almendra',
  },
  {
    emoji: '🧅',
    name: 'cebolla',
  },
  {
    emoji: '🧄',
    name: 'ajo',
  },
  {
    emoji: '🫒',
    name: 'aceite de oliva',
  },
  {
    emoji: '🌾',
    name: 'harina de trigo',
  },
  {
    emoji: '💧',
    name: 'agua',
    isCommon: true,
  },
  {
    emoji: '🌿',
    name: 'perejil',
  },
  {
    emoji: '🧂',
    name: 'sal',
  },
]

export default ingredientsMock?.sort(compareByName)

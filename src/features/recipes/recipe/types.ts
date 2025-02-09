export type IngredientType = {
  emoji: string
  quantity?: string
  measurement?: string
  name: string
  alternative?: string
  details?: string
  recommendation?: string
  isCommon?: boolean
}

export type StepType = {
  description: string
  duration?: number
}

export type TipType = string

export type RecipeType = {
  id: string
  title: string
  slug: string
  source?: string
  servings?: number
  duration?: number
  level?: number
  ingredients: IngredientType[]
  steps: StepType[]
  tips?: TipType[]
}

export type RecipeCardType = {
  title: string
  slug: string
  ingredients: IngredientType[]
}

export type IngredientType = {
  emoji: string
  quantity?: string
  measurement?: string
  name: string
  alternative?: string
  details?: string
  recommendation?: string
}

export type StepType = {
  description: string
  duration?: number
}

export type TipType = string
// export type IngredientsType = IngredientType[]
// export type StepsType = StepType[]
// export type TipsType = TipType[]

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

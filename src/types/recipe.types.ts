export type IngredientType = {
  emoji: string
  quantity?: string
  measurement?: string
  name: string
  alternative?: string
  details?: string
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
  id: number
  title: string
  slug: string
  duration?: number
  level?: number
  ingredients: IngredientType[]
  steps: StepType[]
  tips?: TipType[]
}

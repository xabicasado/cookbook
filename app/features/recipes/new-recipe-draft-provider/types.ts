import type { IngredientType, StepType, TipType } from '../types'

export type NewRecipeDraftType = {
  // id?: string
  title?: string
  slug?: string
  source?: string
  servings?: number
  duration?: number
  level?: number
  ingredients?: IngredientType[]
  steps?: StepType[]
  tips?: TipType[]
}

export type NewRecipeDraftProviderPropsType = {
  children: React.ReactNode
}

export type NewRecipeDraftContextType = {
  // TODO Make a list NewRecipeDraftType[]
  newRecipeDrafts?: NewRecipeDraftType
  setNewRecipeDrafts: React.Dispatch<
    React.SetStateAction<NewRecipeDraftType | undefined>
  >
}

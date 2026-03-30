import type { ReactNode } from 'react'

import type {
  ADD_INGREDIENT,
  ADD_STEP,
  DELETE_INGREDIENT,
  DELETE_STEP,
  EDIT_INGREDIENT,
  EDIT_STEP,
  REORDER_STEPS,
  RESET_DRAFT,
  SET_INGREDIENTS,
  SET_SERVINGS,
  SET_TITLE,
} from './new-recipe-draft-reducer.constants'

import type {
  Ingredient,
  Ingredients,
  Recipe,
} from '@/src/entities/models/recipe'

export type NewRecipeDraftProviderProps = {
  children: ReactNode
}

export type NewRecipeDraftContextState = Omit<Recipe, 'id' | 'created_at'>

export type NewRecipeDraftReducerAction =
  | { type: typeof ADD_INGREDIENT; payload: Ingredient }
  | { type: typeof EDIT_INGREDIENT; payload: Ingredient }
  | { type: typeof DELETE_INGREDIENT; payload: Ingredient }
  | { type: typeof SET_TITLE; payload: string }
  | {
      type: typeof SET_INGREDIENTS
      payload: Ingredients
    }
  | {
      type: typeof SET_SERVINGS
      payload: number
    }
  | { type: typeof ADD_STEP }
  | { type: typeof EDIT_STEP; payload: { index: number; description: string } }
  | { type: typeof DELETE_STEP; payload: number }
  | { type: typeof REORDER_STEPS; payload: string[] }
  | { type: typeof RESET_DRAFT }

export type NewRecipeDraftContextDispatch = {
  addIngredient: (ingredient: Ingredient) => void
  editIngredient: (ingredient: Ingredient) => void
  deleteIngredient: (ingredient: Ingredient) => void
  setIngredients: (ingredients: Ingredients) => void
  setTitle: (title: string) => void
  setServings: (servings: number) => void
  addStep: () => void
  editStep: (index: number, description: string) => void
  deleteStep: (index: number) => void
  reorderSteps: (descriptions: string[]) => void
  resetDraft: () => void
}

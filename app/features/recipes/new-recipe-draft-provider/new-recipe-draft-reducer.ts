import { DEFAULT_SERVINGS } from '../recipe/recipe.constants'
import {
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
  NewRecipeDraftContextState,
  NewRecipeDraftReducerAction,
} from './types'

import type { Step } from '@/src/entities/models/recipe'
import { RecipeTitle } from '@/src/entities/models/recipe'

export const draftReducer = (
  state: NewRecipeDraftContextState,
  action: NewRecipeDraftReducerAction
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const newIngredient = action.payload

      return {
        ...state,
        ingredients: [...state.ingredients, newIngredient],
      }

    case EDIT_INGREDIENT:
      const toEditIngredient = action.payload

      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient.name === toEditIngredient.name
            ? toEditIngredient
            : ingredient
        ),
      }

    case DELETE_INGREDIENT:
      const toDeleteIngredient = action.payload

      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient !== toDeleteIngredient
        ),
      }

    case SET_INGREDIENTS:
      const newIngredientsList = action.payload

      return {
        ...state,
        ingredients: newIngredientsList,
      }

    case SET_TITLE:
      const title = action.payload
      const slug = RecipeTitle.slugify(title)

      return { ...state, title, slug }

    case SET_SERVINGS:
      return { ...state, servings: action.payload }

    case ADD_STEP:
      const newStep: Step = { description: '' }

      return {
        ...state,
        steps: [...(state.steps ?? []), newStep],
      }

    case EDIT_STEP: {
      const { index, description } = action.payload
      const newSteps = [...(state.steps ?? [])]

      newSteps[index] = { ...newSteps[index], description }

      return {
        ...state,
        steps: newSteps,
      }
    }

    case DELETE_STEP: {
      const index = action.payload
      return {
        ...state,
        steps: (state.steps ?? []).filter((_, i) => i !== index),
      }
    }

    case REORDER_STEPS: {
      const newStringOrder = action.payload
      const stepMap = new Map<string, Step>()

      ;(state.steps ?? []).forEach((step) => {
        stepMap.set(step.description, step)
      })

      const reorderedSteps = newStringOrder.map(
        (desc) => stepMap.get(desc) || { description: desc }
      )

      return {
        ...state,
        steps: reorderedSteps,
      }
    }

    case RESET_DRAFT:
      return {
        title: '',
        slug: '',
        servings: DEFAULT_SERVINGS,
        source: '',
        ingredients: [],
        steps: [],
        tips: [],
      }

    default:
      return state
  }
}

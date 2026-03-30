'use client'

import { createContext, useContext, useReducer } from 'react'

import { DEFAULT_SERVINGS } from '../recipe/recipe.constants'
import type {
  NewRecipeDraftContextDispatch,
  NewRecipeDraftContextState,
  NewRecipeDraftProviderProps,
} from '../types'
import { draftReducer } from './new-recipe-draft-reducer'
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

import type { Ingredient } from '@/src/entities/models/recipe'

const NewRecipeDraftStateContext = createContext<
  NewRecipeDraftContextState | undefined
>(undefined)

export const NewRecipeDraftDispatchContext = createContext<
  NewRecipeDraftContextDispatch | undefined
>(undefined)

export const NewRecipeDraftProvider = ({
  children,
}: NewRecipeDraftProviderProps) => {
  const initialState: NewRecipeDraftContextState = {
    title: '',
    slug: '',
    servings: DEFAULT_SERVINGS,
    source: '',
    ingredients: [],
    steps: [],
    tips: [],
  }

  const [state, dispatch] = useReducer(draftReducer, initialState)

  const setTitle = (title: string) =>
    dispatch({
      type: SET_TITLE,
      payload: title,
    })

  const setServings = (servings: number) =>
    dispatch({
      type: SET_SERVINGS,
      payload: servings,
    })

  const addIngredient = (ingredient: Ingredient) =>
    dispatch({
      type: ADD_INGREDIENT,
      payload: ingredient,
    })

  const editIngredient = (ingredient: Ingredient) =>
    dispatch({
      type: EDIT_INGREDIENT,
      payload: ingredient,
    })

  const deleteIngredient = (ingredient: Ingredient) =>
    dispatch({
      type: DELETE_INGREDIENT,
      payload: ingredient,
    })

  const setIngredients = (ingredients: Ingredient[]) =>
    dispatch({
      type: SET_INGREDIENTS,
      payload: ingredients,
    })

  const addStep = () => dispatch({ type: ADD_STEP })

  const editStep = (index: number, description: string) =>
    dispatch({ type: EDIT_STEP, payload: { index, description } })

  const deleteStep = (index: number) =>
    dispatch({ type: DELETE_STEP, payload: index })

  const reorderSteps = (descriptions: string[]) =>
    dispatch({ type: REORDER_STEPS, payload: descriptions })

  const resetDraft = () =>
    dispatch({
      type: RESET_DRAFT,
    })

  return (
    <NewRecipeDraftStateContext value={state}>
      <NewRecipeDraftDispatchContext
        value={{
          addIngredient,
          editIngredient,
          deleteIngredient,
          setIngredients,
          setTitle,
          setServings,
          addStep,
          editStep,
          deleteStep,
          reorderSteps,
          resetDraft,
        }}
      >
        {children}
      </NewRecipeDraftDispatchContext>
    </NewRecipeDraftStateContext>
  )
}

export const useNewRecipeDraftState = () => {
  const context = useContext(NewRecipeDraftStateContext)

  if (!context)
    throw new Error(
      'useNewRecipeDraftState must be used within the scope of NewRecipeDraftProvider'
    )

  return context
}

export const useNewRecipeDraftDispatch = () => {
  const context = useContext(NewRecipeDraftDispatchContext)

  if (!context)
    throw new Error(
      'useNewRecipeDraftDispatch must be used within the scope of NewRecipeDraftProvider'
    )

  return context
}

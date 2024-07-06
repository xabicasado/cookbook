'use client'

import { createContext, useContext, useState } from 'react'

import type {
  NewRecipeDraftContextType,
  NewRecipeDraftProviderPropsType,
  NewRecipeDraftType,
} from '../types'

import { anonymousFunction } from '@/utils/commons'

const NewRecipeDraftContext = createContext<NewRecipeDraftContextType>({
  newRecipeDrafts: undefined,
  setNewRecipeDrafts: anonymousFunction,
})

export const NewRecipeDraftProvider = (
  props: NewRecipeDraftProviderPropsType
) => {
  const { children } = props

  const [newRecipeDrafts, setNewRecipeDrafts] = useState<
    NewRecipeDraftType | undefined
  >(undefined)

  return (
    <NewRecipeDraftContext.Provider
      value={{
        newRecipeDrafts,
        setNewRecipeDrafts,
      }}
    >
      {children}
    </NewRecipeDraftContext.Provider>
  )
}

export const useNewRecipeDraftContext = () => {
  const context = useContext(NewRecipeDraftContext)

  if (context === undefined)
    throw new Error(
      'useNewRecipeDraftContext must be used within the scope of NewRecipeDraftProvider'
    )

  return context
}

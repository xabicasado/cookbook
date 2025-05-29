'use client'

import { createContext, useContext, useState } from 'react'

import type {
  NewRecipeDraftContextType,
  NewRecipeDraftProviderPropsType,
  NewRecipeDraftType,
} from '../types'

import { anonymousFunction } from '@/app/features/utils/commons'

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

  // TODO Handle draft generation steps, like create a formatted title

  return (
    <NewRecipeDraftContext
      value={{
        newRecipeDrafts,
        setNewRecipeDrafts,
      }}
    >
      {children}
    </NewRecipeDraftContext>
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

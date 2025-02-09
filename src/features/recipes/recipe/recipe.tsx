'use client'

import { useState } from 'react'

import { Ingredients } from './ingredients'
import { DEFAULT_SERVINGS } from './recipe.constants'
import {
  HeaderSectionStyled,
  RecipeColumnStyled,
  RecipeStyled,
} from './recipe.styled'
import { generateRecipeText } from './recipe.utils'
import { Servings } from './servings'
import { Steps } from './steps'
import { Tips } from './tips'

import { ButtonSection } from '@/features/layout'
import type { RecipeType } from '@/features/recipes/types'
import { Button, ScrollWatcher, useNotificationContext } from '@/features/ui'

export function Recipe(props: RecipeType) {
  const { showNotification } = useNotificationContext()

  const { title, servings = DEFAULT_SERVINGS, ingredients, steps, tips } = props

  const [currentServings, setCurrentServings] = useState<number>(servings)

  const hasQuantities = ingredients.some(
    (ingredient) => ingredient.quantity !== undefined
  )

  const handleClipboardClick = () => {
    const recipeText = generateRecipeText(props, currentServings)

    navigator.clipboard.writeText(recipeText)
    console.log(recipeText)

    showNotification('¡Receta copiada!')
  }

  const handleLinkClick = () => {
    const recipeLink = window.location.toString()

    navigator.clipboard.writeText(recipeLink)
    console.log(recipeLink)

    showNotification('¡Enlace copiado!')
  }

  return (
    <>
      <HeaderSectionStyled>
        <h2>{title}</h2>

        <ButtonSection>
          <Button
            primary
            size="small"
            beforeIcon="content_copy"
            onClick={handleClipboardClick}
          />
          <Button
            primary
            size="small"
            beforeIcon="link"
            onClick={handleLinkClick}
          />
        </ButtonSection>
      </HeaderSectionStyled>

      <RecipeStyled>
        <RecipeColumnStyled>
          {hasQuantities && (
            <Servings
              currentServings={currentServings}
              setCurrentServings={setCurrentServings}
            />
          )}

          <Ingredients
            servings={servings}
            currentServings={currentServings}
            ingredients={ingredients}
          />
        </RecipeColumnStyled>

        {steps.length > 0 && (
          <RecipeColumnStyled>
            {steps?.length && <Steps steps={steps} />}

            {tips?.length && <Tips tips={tips} />}
          </RecipeColumnStyled>
        )}
      </RecipeStyled>
      <ScrollWatcher />
    </>
  )
}

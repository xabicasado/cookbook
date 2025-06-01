'use client'

import { ServingsProvider, useServingsContext } from '../servings-provider'
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
import type { RecipeType } from './types'

import { ButtonSection } from '@/app/features/layout'
import {
  Button,
  CopyToClipboard,
  ScrollWatcher,
  useNotificationContext,
} from '@/app/features/ui'

export function RecipeWrapper(props: RecipeType) {
  const { title, servings = DEFAULT_SERVINGS, ingredients, steps, tips } = props

  const { showNotification } = useNotificationContext()
  const { currentServings } = useServingsContext()

  const hasQuantities = ingredients?.some(
    (ingredient) => ingredient.quantity !== undefined
  )

  const handleClipboardClick = () => showNotification('¡Receta copiada!')

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
          <CopyToClipboard
            text={generateRecipeText(props, currentServings)}
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
          {hasQuantities && <Servings />}

          <Ingredients servings={servings} ingredients={ingredients} />
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

export function Recipe(props: RecipeType) {
  return (
    <ServingsProvider servings={props.servings ?? DEFAULT_SERVINGS}>
      <RecipeWrapper {...props} />
    </ServingsProvider>
  )
}

'use client'

import { Ingredients } from './ingredients'
import {
  ButtonSectionStyled,
  HeaderSectionStyled,
  ListSectionStyled,
  RecipeSectionStyled,
  RecipeStyled,
  SectionTitleStyled,
} from './recipe.styled'
import { generateRecipeText } from './recipe.utils'

import { type RecipeType } from '@/features/recipes/types'
import { Button, useNotificationContext } from '@/features/ui'

export function Recipe(props: RecipeType) {
  const { showNotification } = useNotificationContext()

  const { title, servings, ingredients, steps, tips } = props

  const handleClipboard = () => {
    const recipeText = generateRecipeText(props)

    navigator.clipboard.writeText(recipeText)
    showNotification('¡Receta copiada!')
  }

  const handleLink = () => {
    const recipeLink = window.location.toString()

    navigator.clipboard.writeText(recipeLink)
    showNotification('¡Enlace copiado!')
  }

  return (
    <>
      <HeaderSectionStyled>
        <h2>{title}</h2>

        <ButtonSectionStyled>
          <Button
            primary
            size="small"
            beforeIcon="content_copy"
            onClick={handleClipboard}
          />
          <Button primary size="small" beforeIcon="link" onClick={handleLink} />
        </ButtonSectionStyled>
      </HeaderSectionStyled>

      <RecipeStyled>
        <RecipeSectionStyled>
          <Ingredients servings={servings} ingredients={ingredients} />
        </RecipeSectionStyled>

        {steps.length > 0 && (
          <RecipeSectionStyled>
            <SectionTitleStyled>Elaboración</SectionTitleStyled>

            <ListSectionStyled>
              {steps.map((step, index) => (
                <li key={index + 1}>
                  {index + 1}. {step?.description}
                </li>
              ))}
            </ListSectionStyled>
          </RecipeSectionStyled>
        )}

        {!(tips == null) && (
          <RecipeSectionStyled>
            <ListSectionStyled>
              {tips.map((tip, index) => (
                <li key={index}>💡 {tip}</li>
              ))}
            </ListSectionStyled>
          </RecipeSectionStyled>
        )}
      </RecipeStyled>
    </>
  )
}

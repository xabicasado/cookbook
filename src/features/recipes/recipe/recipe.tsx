'use client'

import { Ingredients } from './ingredients'
import {
  ButtonSectionStyled,
  RecipeStyled,
  ScrollWatcherStyled,
} from './recipe.styled'
import { generateRecipeText } from './recipe.utils'
import { Steps } from './steps'
import { Tips } from './tips'

import { type RecipeType } from '@/features/recipes/types'
import { Button, useNotificationContext } from '@/features/ui'

export function Recipe(props: RecipeType) {
  const { showNotification } = useNotificationContext()

  const { title, servings, ingredients, steps, tips } = props

  const handleClipboard = () => {
    const recipeText = generateRecipeText(props)

    navigator.clipboard.writeText(recipeText)
    console.log(recipeText)

    showNotification('¡Receta copiada!')
  }

  const handleLink = () => {
    const recipeLink = window.location.toString()

    navigator.clipboard.writeText(recipeLink)
    console.log(recipeLink)

    showNotification('¡Enlace copiado!')
  }

  return (
    <>
      <ScrollWatcherStyled />

      <h2>{title}</h2>

      <RecipeStyled>
        <Ingredients servings={servings} ingredients={ingredients} />

        {/* TODO change section to layout style (two-in-one) */}
        <div>
          <Steps steps={steps} />

          {!(tips == null) && <Tips tips={tips} />}
        </div>
      </RecipeStyled>

      <ButtonSectionStyled>
        {/* <Link href={'/'}>
            <Button
              // primary
              size={'small'}
              label={'Volver al menú'}
              icon={'arrow_back'}
            ></Button>
          </Link> */}

        <Button
          primary
          size={'small'}
          label={'Copiar'}
          icon={'content_copy'}
          onClick={handleClipboard}
        />

        {/* <span className="material-symbols-rounded">content_copy</span> */}

        <Button
          primary
          size={'small'}
          label={'Enlace'}
          icon={'link'}
          onClick={handleLink}
        />

        {/* 
            <Button
              primary
              size={'small'}
              label={'Compartir'}
              icon={'share'}
              onClick={handleLink}
            />
          */}
      </ButtonSectionStyled>
    </>
  )
}

'use client'

import { useState } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

import { type RecipeType } from '@/types/recipe.types'
import { Button } from '@/components/button'
import { Notification } from '@/components/notification'
import { Ingredients } from './ingredients'
import { Steps } from './steps'
import { Tips } from './tips'
import {
  ButtonContainerStyled,
  ButtonStyled,
  // RecipeSectionStyled,
} from './recipe.styled'
import { generateRecipeText } from './recipe.utils'
import { PageContentStyled } from '@/app/layout.styled'

export function Recipe(props: RecipeType) {
  const { title, servings, ingredients, steps, tips } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [notificationDescription, setNotificationDescription] =
    useState<string>('')
  // const pathname = usePathname()
  // const BASE_URL = 'http://localhost:3000'
  // const recipeLink = BASE_URL + pathname

  const handleClipboard = () => {
    const recipeText = generateRecipeText(props)

    navigator.clipboard.writeText(recipeText)
    console.log(recipeText)

    setNotificationDescription('¡Receta copiada!')
    setIsOpen(true)
  }

  const handleLink = () => {
    const recipeLink = window.location.toString()

    navigator.clipboard.writeText(recipeLink)
    console.log(recipeLink)

    setNotificationDescription('¡Enlace copiado!')
    setIsOpen(true)
  }

  return (
    <>
      <h2>{title}</h2>

      <Notification
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={notificationDescription}
      />

      <PageContentStyled>
        <Ingredients servings={servings} ingredients={ingredients} />

        <Steps steps={steps} />

        {!(tips == null) && <Tips tips={tips} />}

        {/* <RecipeSectionStyled> */}
        <ButtonContainerStyled>
          {/* <ButtonStyled>
          <Link href={'/'}>
            <Button
              // primary
              size={'small'}
              label={'Volver al menú'}
              icon={'arrow_back'}
            ></Button>
          </Link>
        </ButtonStyled> */}

          <ButtonStyled>
            <Button
              primary
              size={'small'}
              label={'Copiar'}
              icon={'content_copy'}
              onClick={handleClipboard}
            />
          </ButtonStyled>

          <ButtonStyled>
            <Button
              primary
              size={'small'}
              label={'Enlace'}
              icon={'link'}
              onClick={handleLink}
            />
          </ButtonStyled>

          {/* 
          <ButtonStyled>
            <Button
              primary
              size={'small'}
              label={'Compartir'}
              icon={'share'}
              onClick={handleLink}
            />
          </ButtonStyled>
          */}
        </ButtonContainerStyled>
        {/* </RecipeSectionStyled> */}
      </PageContentStyled>
    </>
  )
}

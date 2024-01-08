'use client'

import { useState, type ChangeEvent } from 'react'
import { useRecipeContext } from '@/contexts/recipe.context'

import { PageContentStyled } from '@/app/layout.styled'
// import {
//   RecipeSectionStyled,
//   RecipeSectionContentStyled,
// } from '@/components/recipe/recipe.styled'
import { EditInput } from '@/components/edit-input'
import { Button } from '@/components/button'
// import { IngredientIcon } from '@/components/ingredient-icon'
import { Notification } from '@/components/notification'
import { slugify } from '@/utils/commons'

export default function NewRecipePage() {
  const { recipeContext } = useRecipeContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [titleInput, setTitleInput] = useState<string>(
    recipeContext?.newRecipeTitle ?? ''
  )
  const [slugInput, setSlugInput] = useState<string>(
    recipeContext?.newRecipeTitle != null
      ? slugify(recipeContext?.newRecipeTitle)
      : ''
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value)
    setSlugInput(slugify(event.target.value))
  }

  return (
    <>
      <Notification
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={'¡Receta guardada!'}
      />
      <h2>Añadir receta</h2>
      <PageContentStyled>
        <EditInput
          id={'title'}
          onChange={handleChange}
          subText={slugInput}
          placeholder={'Título de la receta'}
          content={titleInput}
        />

        {/* <h3>Ingredientes</h3>
        <IngredientIcon key={'aguacate'} ingredient={'🥑'} />
        <IngredientIcon key={'platano'} ingredient={'🍌'} />

        <EditInput id={'ingredient-1'} label={'Guardar'} />
        <Button
          primary
          label={'Guardar'}
          onClick={() => {
            setIsOpen(true)
          }}
        />
        <p>Añadir ingrediente</p>

        <RecipeSectionStyled>
          <h3>Elaboración</h3>
          <RecipeSectionContentStyled>
            <EditInput id={'step-1'} />
          </RecipeSectionContentStyled>
        </RecipeSectionStyled>

        <RecipeSectionStyled>
          <h3>Tips</h3>
          <RecipeSectionContentStyled>
            <EditInput id={'tip-1'} />
          </RecipeSectionContentStyled>
        </RecipeSectionStyled> */}
      </PageContentStyled>

      <Button
        primary
        label={'Guardar'}
        onClick={() => {
          setIsOpen(true)
        }}
      />
    </>
  )
}

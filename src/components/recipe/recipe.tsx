'use client'

import { type RecipeType } from '@/types/recipe.types'
import { Button } from '@/components/button'
import { Ingredients } from './ingredients'
import { Steps } from './steps'
import { Tips } from './tips'
import { RecipeTitle } from './recipe.styled'
import { generateRecipeText } from './recipe.utils'

export function Recipe(props: RecipeType) {
  const { title, ingredients, steps, tips } = props

  const handleClipboard = () => {
    const recipeText = generateRecipeText(props)

    navigator.clipboard.writeText(recipeText)
  }

  return (
    <>
      <RecipeTitle>{title}</RecipeTitle>

      <br />
      <Button label={'Copiar'} onClick={handleClipboard} />

      <br />

      <Ingredients ingredients={ingredients} />

      <br />

      <Steps steps={steps} />
      <br />

      <Tips tips={tips} />
    </>
  )
}

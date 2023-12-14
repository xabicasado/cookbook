'use client'

import { type RecipeType } from '@/types/recipe.types'
import { Button } from '@/components/button'
import { Ingredients } from './ingredients'
import { Steps } from './steps'
import { Tips } from './tips'
import { generateRecipeText } from './recipe.utils'
import { RecipeProvider } from '@/contexts/recipe.context'
import { PageContentStyled } from '@/app/layout.styled'

export function Recipe(props: RecipeType) {
  const { title, ingredients, steps, tips } = props

  const handleClipboard = () => {
    const recipeText = generateRecipeText(props)

    navigator.clipboard.writeText(recipeText)
  }

  return (
    <RecipeProvider value={{}}>
      <h2>{title}</h2>
      <PageContentStyled>
        {/* <Button label={'Copiar'} onClick={handleClipboard} /> */}

        <Ingredients ingredients={ingredients} />

        <Steps steps={steps} />

        {!(tips == null) && <Tips tips={tips} />}
      </PageContentStyled>
    </RecipeProvider>
  )
}

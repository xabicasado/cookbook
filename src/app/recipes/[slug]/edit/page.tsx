import { notFound } from 'next/navigation'

import { PageContentStyled } from '@/app/layout.styled'
import { Button } from '@/components/button'
import { EditInput } from '@/components/edit-input'

import recipesMock from '@/mocks/recipes.mock'

type EditRecipePagePropsType = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return recipesMock.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default function EditRecipePage({ params }: EditRecipePagePropsType) {
  const { slug } = params
  const recipe = recipesMock.find((r) => r.slug === slug)

  if (recipe == null) notFound()

  const ingredients = recipe?.ingredients
    .map((ingredient) => ingredient?.name)
    .toString()
  const steps = recipe?.steps.map((step) => step?.description).toString()
  const tips = recipe?.ingredients
    .map((ingredient) => ingredient?.name)
    .toString()

  return (
    <>
      <h2>{recipe?.title}</h2>
      <PageContentStyled>
        <EditInput
          id={'Ingredientes'}
          label={'Ingredientes'}
          content={ingredients}
        />
        <EditInput id={'Elaboración'} label={'Elaboración'} content={steps} />
        <EditInput id={'Tips'} label={'Tips'} content={tips} />
      </PageContentStyled>

      <Button primary label={'Guardar'} />
    </>
  )
}

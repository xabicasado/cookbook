// import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Recipe } from '@/components/recipe'
// import { Button } from '@/components/button'
import recipesMock from '@/mocks/recipes.mock'

type RecipePagePropsType = {
  params: { slug: string }
}

export async function generateStaticParams() {
  // const recipes = await fetch('https://.../recipes').then((res) => res.json())

  return recipesMock.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default function RecipePage({ params }: RecipePagePropsType) {
  const { slug } = params
  const recipe = recipesMock.find((r) => r.slug === slug)

  if (recipe == null) notFound()

  return (
    <>
      {/* <Link href={'/'}>
        <Button
          primary
          size={'small'}
          label={'Volver al menú'}
          icon={'arrow_back'}
        ></Button>
      </Link> */}

      <Recipe {...recipe} />

      {/* <Link href={`/recipes/${slug}/edit`}>
        <Button label={'Editar'}></Button>
      </Link> */}
    </>
  )
}

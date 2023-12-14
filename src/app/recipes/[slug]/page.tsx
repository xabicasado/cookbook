import { Recipe } from '@/components/recipe'
import { Button } from '@/components/button'
import recipesMock from '@/mocks/recipes.mock'
import Link from 'next/link'

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

  return (
    <>
      {recipe != null && <Recipe {...recipe} />}

      <Link href={'/'}>
        <Button primary label={'Volver al menú'}></Button>
      </Link>
    </>
  )
}

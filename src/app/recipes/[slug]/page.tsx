import recipesMock from '@/mocks/recipes.mock'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type PropsType = {
  params: { slug: string }
}

export async function generateStaticParams() {
  // const recipes = await fetch('https://.../recipes').then((res) => res.json())

  return recipesMock.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default function Recipe({ params }: PropsType) {
  const { slug } = params
  const recipe = recipesMock.find((r) => r.slug === slug)

  return (
    <>
      <h1>{recipe?.title}</h1>

      <br />

      <ul>
        {recipe?.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient?.name}</li>
        ))}
      </ul>

      <br />

      <ul>
        {recipe?.steps.map((step, index) => (
          <li key={index}>
            {index + 1}. {step?.description}
          </li>
        ))}
      </ul>

      <br />

      <Link href={'/'}>Volver al menú</Link>
    </>
  )
}

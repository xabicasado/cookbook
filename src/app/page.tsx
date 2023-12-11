import recipesMock from '@/mocks/recipes.mock'
import { Card } from '@/components/card'

export default function Home() {
  return (
    <>
      {recipesMock.map((recipe) => (
        <Card
          key={recipe.id}
          title={recipe.title}
          ingredients={recipe?.ingredients.map(
            (ingredient) => ingredient?.emoji
          )}
          href={`/recipes/${recipe.slug}`}
        />
      ))}
    </>
  )
}

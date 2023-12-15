'use client'

import { useEffect, type ChangeEvent } from 'react'
import { Card } from '@/components/card'
import { SearchInput } from '@/components/search-input'
import { PageContentStyled } from './layout.styled'
import { useRecipeContext } from '@/contexts/recipe.context'
import recipesMock from '@/mocks/recipes.mock'
import { cleanSearchString } from '@/utils/commons'

export default function HomePage() {
  const { recipeContext, setRecipeContext } = useRecipeContext()

  // https://everythingcs.dev/blog/get-form-values-react-nextjs/
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputRecipe = event.target.value

    if (inputRecipe === '') setRecipeContext(recipesMock)

    const inputWords = cleanSearchString(inputRecipe).split(' ')

    // TODO Blacklist words 'de' 'y'

    setRecipeContext(
      recipesMock.filter((r) =>
        inputWords.every((word) => cleanSearchString(r.title).includes(word))
      )
    )
  }

  useEffect(() => {
    setRecipeContext(recipesMock)
  }, [])

  return (
    <>
      {/* <h2>¿Qué te apetece comer hoy?</h2>
      <PageContentStyled>
        <SearchInput onChange={handleChange} />
      </PageContentStyled> */}

      <h2>Inventario de recetas</h2>
      <PageContentStyled>
        <SearchInput onChange={handleChange} />

        {recipeContext.map((recipe) => (
          <Card
            key={recipe.id}
            title={recipe.title}
            ingredients={recipe?.ingredients.map(
              (ingredient) => ingredient?.emoji
            )}
            href={`/recipes/${recipe.slug}`}
          />
        ))}
      </PageContentStyled>
    </>
  )
}

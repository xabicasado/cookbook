'use client'

import { useEffect } from 'react'
import { Card } from '@/components/card'
import { SearchInput } from '@/components/search-input'
import { PageContentStyled } from './layout.styled'
import { useRecipeContext } from '@/contexts/recipe.context'
import recipesMock from '@/mocks/recipes.mock'

export default function HomePage() {
  const { recipeContext, setRecipeContext } = useRecipeContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      setRecipeContext(
        recipesMock.filter((r) =>
          r.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(
              event.target.value
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
            )
        )
      )
    } else {
      setRecipeContext(recipesMock)
    }
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

'use client'

import {
  useEffect,
  type ChangeEvent,
  // useState
} from 'react'
import Link from 'next/link'

import { PageContentStyled } from './layout.styled'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { SearchInput } from '@/components/search-input'
// import { Skeleton } from '@/components/skeleton'
import { useRecipeContext } from '@/contexts/recipe.context'
import { cleanSearchString } from '@/utils/commons'

import recipesMock from '@/mocks/recipes.mock'

export default function HomePage() {
  const { recipeContext, setRecipeContext } = useRecipeContext()
  const { recipes } = recipeContext
  // const [isLoading, setIsLoading] = useState<boolean>(true)

  // https://everythingcs.dev/blog/get-form-values-react-nextjs/
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputRecipe = event.target.value

    if (inputRecipe === '')
      setRecipeContext({ newRecipeTitle: '', recipes: recipesMock })

    const inputWords = cleanSearchString(inputRecipe).split(' ')

    const recipeTitle =
      inputRecipe.charAt(0).toUpperCase() + inputRecipe.slice(1).toLowerCase()

    setRecipeContext({
      newRecipeTitle: recipeTitle,
      recipes: recipesMock.filter((r) =>
        inputWords.every((word) => cleanSearchString(r.title).includes(word))
      ),
    })
  }

  // TODO Delete and handle with context
  useEffect(() => {
    setRecipeContext({
      newRecipeTitle: '',
      recipes: recipesMock,
      // ?.sort((rA, rB) => {
      //   if (rA.title < rB.title) {
      //     return -1
      //   }
      // }),
    })
  }, [])

  // TODO Delete and handle loading time delay / and on sorting
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [isLoading])

  return (
    <>
      {/* <h2>¿Qué te apetece comer hoy?</h2>
      <PageContentStyled>
        <SearchInput onChange={handleChange} />
      </PageContentStyled> */}

      <h2>Inventario de recetas</h2>

      <PageContentStyled>
        <SearchInput onChange={handleChange} />

        {
          // isLoading ? (
          //   <>
          //     <Skeleton />
          //     <Skeleton />
          //     <Skeleton />
          //   </>
          // ) :
          recipes?.length === 0 ? (
            <Link href={'/recipes/new'}>
              <Button label="Añadir nueva receta" primary fullWidth />
            </Link>
          ) : (
            recipes?.map((recipe) => (
              <Card
                key={recipe.id}
                title={recipe.title}
                ingredients={recipe?.ingredients.map(
                  (ingredient) => ingredient?.emoji
                )}
                href={`/recipes/${recipe.slug}`}
              />
            ))
          )
        }

        {/*
        {recipes?.map((recipe) => (
          <Card
            key={recipe.id}
            title={recipe.title}
            ingredients={recipe?.ingredients.map(
              (ingredient) => ingredient?.emoji
            )}
            href={`/recipes/${recipe.slug}`}
          />
        ))}
        */}
      </PageContentStyled>
    </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { retrieveRecipe } from '@/app/actions'
import { Recipe } from '@/features/recipes'
import { type RecipeType } from '@/features/recipes/types'

export async function generateMetadata({
  params,
}: RecipePagePropsType): Promise<Metadata> {
  const { slug } = params

  const response = await retrieveRecipe(slug)
  const recipe: RecipeType = await response.json()

  if (recipe == null) notFound()

  return {
    title: `${recipe.title} | Cookbook`,
  }
}

type RecipePagePropsType = {
  params: { slug: string }
}

export default async function RecipePage(props: RecipePagePropsType) {
  const { slug } = props.params

  const response = await retrieveRecipe(slug)
  const recipe: RecipeType = await response.json()

  if (recipe == null) notFound()

  return <Recipe {...recipe} />
}

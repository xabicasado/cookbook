import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Recipe as RecipeSection } from '@/app/features/recipes'

import { getInjection } from '@/di/container'
import { NotFoundError } from '@/src/entities/errors/common'
import { type Recipe } from '@/src/entities/models/recipe'

type RecipePageProps = {
  params: Promise<{ slug: string }>
}

async function getRecipeBySlug(slug: string) {
  try {
    const getRecipeBySlugController = getInjection('IGetRecipeBySlugController')

    return await getRecipeBySlugController(slug)
  } catch (error) {
    throw error
  }
}

export async function generateMetadata(
  props: RecipePageProps
): Promise<Metadata> {
  const params = await props.params
  const { slug } = params

  let recipe: Recipe

  try {
    recipe = await getRecipeBySlug(slug)
  } catch (err) {
    if (err instanceof NotFoundError) notFound()

    throw err
  }

  return {
    title: `${recipe.title} | Cookbook`,
  }
}

export default async function RecipePage(props: RecipePageProps) {
  const { slug } = await props.params

  let recipe: Recipe

  try {
    recipe = await getRecipeBySlug(slug)
  } catch (err) {
    if (err instanceof NotFoundError) notFound()

    return {
      error:
        'An error happened while retrieving the recipe. The developers have been notified. Please try again later.',
    }
  }

  return <RecipeSection {...recipe} />
}

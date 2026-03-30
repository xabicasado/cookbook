import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Recipe as RecipeSection } from '@/app/features/recipes'

import { getServerInjection } from '@/di/server/container'
import { NotFoundError } from '@/src/entities/errors/common'
import { type Recipe } from '@/src/entities/models/recipe'

type RecipePageProps = {
  params: Promise<{ slug: string }>
}

async function getRecipeBySlug(slug: string) {
  try {
    const getRecipeBySlugController = getServerInjection(
      'IGetRecipeBySlugController'
    )

    return await getRecipeBySlugController(slug)
  } catch (error) {
    throw error
  }
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params

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

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params

  let recipe: Recipe

  try {
    recipe = await getRecipeBySlug(slug)
  } catch (error) {
    if (error instanceof NotFoundError) notFound()

    throw error
  }

  return <RecipeSection {...recipe} />
}

'use server'

import { createClient } from '@/lib/db'

export async function retrieveRecipe(slug: string) {
  const supabase = createClient()

  const { data: recipe } = await supabase
    .from('recipes')
    .select()
    .eq('slug', slug)
    .maybeSingle()

  return Response.json(recipe)
}

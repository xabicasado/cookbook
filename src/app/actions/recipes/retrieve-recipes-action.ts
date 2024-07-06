'use server'

import { createClient } from '@/lib/db'

// https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
export async function retrieveRecipes() {
  const supabase = createClient()

  const { data: recipes } = await supabase
    .from('recipes')
    .select('title, slug, ingredients')
    .order('title')

  return Response.json(recipes)
}

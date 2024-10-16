'use client'

import Link from 'next/link'

import { useRecipesContext } from '@/features/recipes'
import { Button, CardSection, SearchBar } from '@/features/ui'

export function RecipesSection() {
  const { filteredRecipes, handleChange } = useRecipesContext()

  return (
    <>
      <SearchBar onChange={handleChange} />

      {filteredRecipes?.length === 0 ? (
        <Link href={'/recipes/new'} passHref>
          <Button label="Añadir nueva receta" primary fullWidth disabled />
        </Link>
      ) : (
        <>
          <CardSection recipes={filteredRecipes} />
        </>
      )}
    </>
  )
}

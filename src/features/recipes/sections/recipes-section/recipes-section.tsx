'use client'

import { useRecipesContext } from '@/features/recipes'
import { Button, CardSection, SearchBar } from '@/features/ui'

export function RecipesSection() {
  const { filteredRecipes, handleChange } = useRecipesContext()

  return (
    <>
      <SearchBar onChange={handleChange} />

      {filteredRecipes?.length === 0 ? (
        <Button label="Añadir nueva receta" primary fullWidth disabled />
      ) : (
        <CardSection recipes={filteredRecipes} />
      )}
    </>
  )
}

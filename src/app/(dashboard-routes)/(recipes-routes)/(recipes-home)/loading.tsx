import { CardSectionSkeleton } from '@/features/layout'
import { SearchBar, Toggle } from '@/features/ui'

export default function LoadingHomePage() {
  return (
    <>
      <h2>Inventario de recetas</h2>

      <SearchBar name="filterRecipes" disabled />
      <Toggle name="toggle" label="Filtrar por ingredientes" disabled />

      <CardSectionSkeleton cards={[]} />
    </>
  )
}

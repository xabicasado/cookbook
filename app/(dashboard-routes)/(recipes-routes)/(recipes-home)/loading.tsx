import { CardSectionSkeleton } from '@/app/features/layout'
import { SearchBar, Toggle } from '@/app/features/ui'

export default function LoadingHomePage() {
  return (
    <>
      <h2>Inventario de recetas</h2>

      <SearchBar name="filterRecipes" disabled />
      <Toggle name="toggle" label="Buscar por ingredientes" disabled />

      <CardSectionSkeleton cards={[]} />
    </>
  )
}

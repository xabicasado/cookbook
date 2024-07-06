import { CardSectionSkeleton, SearchBar } from '@/features/ui'

export default function LoadingHomePage() {
  return (
    <>
      {/* https://www.smashingmagazine.com/2020/04/skeleton-screens-react/ */}
      <h2>Inventario de recetas</h2>

      <SearchBar disabled />

      <CardSectionSkeleton />
    </>
  )
}

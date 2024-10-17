// import {
//   TitleSkeletonStyled,
//   SearchBarSkeletonStyled,
// } from '@app/recipes/[slug]/loading.styled'
import { CardSectionSkeleton, SearchBar } from '@/features/ui'

export default function LoadingHomePage() {
  return (
    <>
      {/* <TitleSkeletonStyled /> */}
      <h2>Inventario de recetas</h2>

      {/* TODO skeleton title */}
      {/* https://www.smashingmagazine.com/2020/04/skeleton-screens-react/ */}

      {/* <SearchBarSkeletonStyled disabled /> */}
      <SearchBar name="filterRecipes" disabled />

      <CardSectionSkeleton />
    </>
  )
}

'use client'

import {
  IngredientsContainerSkeletonStyled,
  SkeletonStyled,
  TitleSkeletonStyled,
} from './card.skeleton.styled'

export function CardSkeleton() {
  return (
    // TODO solve justify
    <SkeletonStyled justify="center">
      <TitleSkeletonStyled />
      <IngredientsContainerSkeletonStyled />
    </SkeletonStyled>
  )
}

'use client'

import {
  IngredientsContainerSkeletonStyled,
  SkeletonStyled,
  TitleSkeletonStyled,
} from './card.skeleton.styled'

export function CardSkeleton() {
  return (
    <SkeletonStyled>
      <TitleSkeletonStyled />
      <IngredientsContainerSkeletonStyled />
    </SkeletonStyled>
  )
}

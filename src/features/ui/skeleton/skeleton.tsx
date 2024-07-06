'use client'

import {
  IngredientsContainerSkeletonStyled,
  SkeletonStyled,
  TitleSkeletonStyled,
} from './skeleton.styled'

// https://nextjs.org/learn/dashboard-app/streaming
export function Skeleton() {
  return (
    <SkeletonStyled>
      <TitleSkeletonStyled />
      <IngredientsContainerSkeletonStyled />
    </SkeletonStyled>
  )
}

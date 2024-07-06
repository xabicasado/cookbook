'use client'

import { CardSectionStyled } from './card-section.styled'

import { Skeleton } from '@/features/ui'

export function CardSectionSkeleton() {
  return (
    <CardSectionStyled>
      {Array(4)
        .fill(undefined)
        .map((_, index) => (
          <Skeleton key={index} />
        ))}
    </CardSectionStyled>
  )
}

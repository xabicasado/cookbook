'use client'

import { CardSectionStyled } from './card-section.styled'

import { CardSkeleton } from '@/features/ui'

export function CardSectionSkeleton() {
  return (
    <CardSectionStyled>
      {Array(4)
        .fill(undefined)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </CardSectionStyled>
  )
}

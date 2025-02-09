'use client'

import { CardSectionStyled } from './card-section.styled'
import type { CardSectionProps } from './types'

import { CardSkeleton } from '@/features/ui'

export function CardSectionSkeleton({ size = 'large' }: CardSectionProps) {
  return (
    <CardSectionStyled size={size}>
      {Array(4)
        .fill(undefined)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </CardSectionStyled>
  )
}

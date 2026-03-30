'use client'

import { CardSectionStyled } from './card-section.styled'
import type { CardSectionProps } from './types'

import { CardSkeleton } from '@/app/features/ui'

export function CardSectionSkeleton({
  size = 'large',
}: Omit<CardSectionProps, 'cards'>) {
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

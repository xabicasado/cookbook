'use client'

import { useMemo } from 'react'

import {
  CurrentNumberStyled,
  LabelStyled,
  NumberRangeStyled,
} from './number-range.styled'
import type { NumberRangeProps } from './types'

import { Button } from '@/app/features/ui'

export function NumberRange({ number, setNumber, label }: NumberRangeProps) {
  const hasReachedMin = useMemo(() => number <= 1, [number])

  const handleRemove = () => number > 1 && setNumber(number - 1)

  const handleAdd = () => setNumber(number + 1)

  return (
    <>
      {label && <LabelStyled>{label}</LabelStyled>}

      <NumberRangeStyled>
        <Button
          size="small"
          justify="start"
          beforeIcon="remove"
          disabled={hasReachedMin}
          onClick={handleRemove}
        />

        <CurrentNumberStyled>{number}</CurrentNumberStyled>

        <Button
          size="small"
          justify="start"
          beforeIcon="add"
          onClick={handleAdd}
        />
      </NumberRangeStyled>
    </>
  )
}

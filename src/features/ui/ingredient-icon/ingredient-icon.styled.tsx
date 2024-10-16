'use client'

import styled, { css } from 'styled-components'

const defaultStyles = css`
  display: inline-flex;
  ${({ theme }) => `width: ${theme?.spacing?.l};`}
`

const statuses = {
  default: css`
    background-color: ${({ theme }) => theme?.colors?.invertedText};
  `,
  available: css`
    background-color: ${({ theme }) => theme?.colors?.complementaryOne};
  `,
  lacking: css`
    background-color: ${({ theme }) => theme?.colors?.complementaryTwo};
  `,
  needToGo: css`
    background-color: ${({ theme }) => theme?.colors?.complementaryThree};
  `,
}

export const IngredientIconStyled = styled.span<{
  status: string
  hasVisibleName?: boolean
}>`
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme?.fontSize?.s};

  height: ${({ theme }) => theme?.spacing?.l};
  ${({ hasVisibleName }) => !hasVisibleName && defaultStyles}

  border: ${({ theme }) => theme?.spacing?.xxs} solid
      ${({ theme }) => theme?.colors?.invertedText};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  ${({ status }) => statuses[status as keyof typeof statuses]}
`
IngredientIconStyled.displayName = 'IngredientIconStyled'

export const IngredientNameStyled = styled.span`
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
IngredientNameStyled.displayName = 'IngredientNameStyled'

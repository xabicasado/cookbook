'use client'

import styled, { css } from 'styled-components'

const statuses = {
  default: css`
    border: ${({ theme }) => theme?.spacing?.xxs} solid
      ${({ theme }) => theme?.colors?.invertedText};

    background-color: ${({ theme }) => theme?.colors?.invertedText};
  `,
  available: css`
    border: ${({ theme }) => theme?.spacing?.xxs} solid
      ${({ theme }) => theme?.colors?.complementaryOne};

    background-color: ${({ theme }) => theme?.colors?.complementaryOne};
  `,
  lacking: css`
    border: ${({ theme }) => theme?.spacing?.xxs} solid
      ${({ theme }) => theme?.colors?.complementaryTwo};

    background-color: ${({ theme }) => theme?.colors?.complementaryTwo};
  `,
}

export const IngredientIconStyled = styled.span<{
  status: string
}>`
  /* display: grid;
  place-items: center; */
  /* place-content: center; */

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme?.fontSize?.s};

  width: ${({ theme }) => theme?.spacing?.l};
  height: ${({ theme }) => theme?.spacing?.l};
  /* height: auto; */

  /* display: inline-block; */
  /* width: 50%;
  height: auto; */
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  /* width: 100%;
  height: auto; */

  ${({ status }) => statuses[status as keyof typeof statuses]}

  /* background-color: ${({ theme }) => theme?.colors?.invertedText}; */
  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.invertedText};
`
IngredientIconStyled.displayName = 'IngredientIconStyled'

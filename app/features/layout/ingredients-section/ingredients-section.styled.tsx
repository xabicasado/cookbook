'use client'

import styled from 'styled-components'

export const IngredientsSectionStyled = styled.section<{ $justify: string }>`
  /* TODO Delete after testing */
  /* TODO prop para background */
  /* background-color: salmon;
  border-radius: ${({ theme }) => theme?.borderRadius?.l}; */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* TODO prop para justify */
  /* justify-content: start; */
  ${({ $justify }) => $justify !== undefined && `justify-content: ${$justify};`}

  column-gap: ${({ theme }) => theme?.spacing?.xs};
  row-gap: ${({ theme }) => theme?.spacing?.xs};

  padding-block: ${({ theme }) => theme?.spacing?.s};
`
IngredientsSectionStyled.displayName = 'IngredientsSectionStyled'

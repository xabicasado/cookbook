'use client'

import styled, { css } from 'styled-components'

const sizes = {
  small: css`
    row-gap: ${({ theme }) => theme?.spacing?.none};
  `,
  medium: css`
    row-gap: ${({ theme }) => theme?.spacing?.xs};
  `,
  large: css`
    row-gap: ${({ theme }) => theme?.spacing?.s};
  `,
}

export const ListSectionStyled = styled.ul<{ size: string }>`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme?.spacing?.s};

  ${({ size }) => sizes[size as keyof typeof sizes]}
`
ListSectionStyled.displayName = 'ListSectionStyled'

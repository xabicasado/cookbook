'use client'

import styled, { css } from 'styled-components'

const sizes = {
  small: css`
    grid-template-columns: repeat(auto-fill, minmax(10ch, 1fr));
  `,
  medium: css`
    grid-template-columns: repeat(auto-fill, minmax(15ch, 1fr));
  `,
  large: css`
    grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
  `,
}

export const CardSectionStyled = styled.section<{
  size: string
}>`
  display: grid;
  gap: ${({ theme }) => theme?.spacing?.s};

  grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));

  ${({ size }) => sizes[size as keyof typeof sizes]}
`
CardSectionStyled.displayName = 'CardSectionStyled'

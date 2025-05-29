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

  /* https://keepcoding.io/blog/auto-fill-y-auto-fit-en-css-grid/ */
  grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));

  /* grid-template-rows: min-content; */
  /* grid-template-columns: repeat(auto-fit, fit-content(1fr)); */

  /* grid-template-columns: subgrid; */
  /* grid-auto-rows: max-content; */

  ${({ size }) => sizes[size as keyof typeof sizes]}
`
CardSectionStyled.displayName = 'CardSectionStyled'

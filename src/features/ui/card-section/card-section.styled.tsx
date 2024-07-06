'use client'

import styled from 'styled-components'

export const CardSectionStyled = styled.section`
  display: grid;
  gap: ${({ theme }) => theme?.spacing?.s};

  /* https://keepcoding.io/blog/auto-fill-y-auto-fit-en-css-grid/ */
  grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));

  /* grid-template-rows: min-content; */
  /* grid-template-columns: repeat(auto-fit, fit-content(1fr)); */

  /* grid-template-columns: subgrid; */
  /* grid-auto-rows: max-content; */
`
CardSectionStyled.displayName = 'CardSectionStyled'

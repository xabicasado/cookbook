'use client'

import styled from 'styled-components'

export const RootContainerStyled = styled.div`
  min-height: 100dvh;
  display: grid;
  /* grid-template-rows: [header-start] auto [header-end] [main-start] 1fr [main-end] [footer-start] auto [footer-end]; */
  grid-template-rows: auto 1fr auto;
`
RootContainerStyled.displayName = 'RootContainerStyled'

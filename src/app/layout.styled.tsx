'use client'

import styled from 'styled-components'

export const MainContainerStyled = styled.main`
  /* padding: 12px 24px; */
  padding: 1.5em;
  /* https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile */
  // TODO if Desktop change with media query
  /* padding: 20px 60px; */
  margin: auto;
  /* min-height: 100vh; */
`
MainContainerStyled.displayName = 'MainContainerStyled'

export const PageContentStyled = styled.div`
  padding: 0.5em 0;
`
PageContentStyled.displayName = 'PageContentStyled'

'use client'

import styled from 'styled-components'

export const MainContainerStyled = styled.div`
  padding: 10px 30px;
  /* https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile */
  // TODO if Desktop change with media query
  /* padding: 20px 60px; */
  margin: auto;
`
MainContainerStyled.displayName = 'MainContainerStyled'

export const PageContentStyled = styled.div`
  padding: 0.5em 0;
`
PageContentStyled.displayName = 'PageContentStyled'

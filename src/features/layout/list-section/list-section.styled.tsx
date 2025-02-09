'use client'

import styled from 'styled-components'

export const ListSectionStyled = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme?.spacing?.xs};
`
ListSectionStyled.displayName = 'ListSectionStyled'

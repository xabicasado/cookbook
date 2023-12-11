'use client'

import styled from 'styled-components'

export const ContainerStyled = styled.div`
  padding: 20px 30px;
  margin: auto;
`
ContainerStyled.displayName = 'ContainerStyled'

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme?.fonts?.dancingScript};
  color: ${({ theme }) => theme?.colors?.first};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  font-size: 3rem;
  line-height: 2;
`
MainTitle.displayName = 'MainTitle'

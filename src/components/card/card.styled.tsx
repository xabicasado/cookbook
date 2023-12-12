'use client'

import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme?.colors?.first};
  border-radius: ${({ theme }) => theme?.borderRadius?.m};
  margin-bottom: 20px;

  /* div {
    &:not(:first-child) {
      margin-top: 20px;
    }
  } */
`
CardContainer.displayName = 'CardContainer'

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme?.fontSize?.h1};
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`
CardTitle.displayName = 'CardTitle'

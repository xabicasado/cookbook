'use client'

import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme?.colors?.first};

  margin-bottom: 20px;
  /* &:not(:first-child) {
    margin-top: 20px;
  } */
`
CardContainer.displayName = 'CardContainer'

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
CardTitle.displayName = 'CardTitle'

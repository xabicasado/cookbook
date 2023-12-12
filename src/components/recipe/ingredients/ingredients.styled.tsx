'use client'

import styled from 'styled-components'

export const IngredientsContainer = styled.div`
  /* padding: 20px 30px; */
  /* background-color: ${({ theme }) => theme?.colors?.second};
  border-radius: ${({ theme }) => theme?.borderRadius?.m}; */
`
IngredientsContainer.displayName = 'IngredientsContainer'

export const IngredientsTitle = styled.h2`
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  font-size: ${({ theme }) => theme?.fontSize?.h2};
  line-height: 2;
`
IngredientsTitle.displayName = 'IngredientsTitle'

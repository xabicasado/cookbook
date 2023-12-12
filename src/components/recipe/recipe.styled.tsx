'use client'

import styled from 'styled-components'

export const RecipeTitle = styled.h2`
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.h1};
  /* line-height: 2; */
`
RecipeTitle.displayName = 'RecipeTitle'

export const RecipeSubtitle = styled.h2`
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  font-size: ${({ theme }) => theme?.fontSize?.h2};
  line-height: 2;
`
RecipeSubtitle.displayName = 'RecipeSubtitle'

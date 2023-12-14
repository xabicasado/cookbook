'use client'

import styled from 'styled-components'

export const CardContainerStyled = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme?.colors?.primary};

  /* https://htmlcolorcodes.com/color-picker/ */
  /* background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme?.colors?.primaryA},
    ${({ theme }) => theme?.colors?.primaryC},
  ); */

  border-radius: ${({ theme }) => theme?.borderRadius?.l};

  margin: 0.5em 0;

  /* div {
    &:not(:first-child) {
      margin-top: 20px;
    }
  } */
`
CardContainerStyled.displayName = 'CardContainerStyled'

export const TitleStyled = styled.h3`
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`
TitleStyled.displayName = 'TitleStyled'

export const IngredientsContainerStyled = styled.div`
  padding-top: 0.5rem;
`
IngredientsContainerStyled.displayName = 'IngredientsContainerStyled'

export const IngredientStyled = styled.span`
  font-size: 0.9rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  background-color: ${({ theme }) => theme?.colors?.invertedText};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`
IngredientStyled.displayName = 'IngredientStyled'

'use client'

import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: 0;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  /* font-size: ${({ theme }) => theme?.fontSize?.p}; */
  padding: 12px 24px;

  background-color: ${({ theme }) => theme?.colors?.first};
  color: ${({ theme }) => theme?.colors?.invertedText};
`
ButtonStyled.displayName = 'ButtonStyled'

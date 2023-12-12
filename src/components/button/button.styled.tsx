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
  background-color: ${({ theme, primary }) =>
    primary === true ? theme?.colors?.first : theme?.colors?.second};

  color: ${({ theme, primary }) =>
    primary === true ? theme?.colors?.invertedText : theme?.colors?.text};
`
ButtonStyled.displayName = 'ButtonStyled'

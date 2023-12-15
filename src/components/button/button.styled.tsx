'use client'

import styled, { css } from 'styled-components'

const defaultStyles = css`
  ${({ theme }) => `background-color:${theme?.colors?.primary};`}
  ${({ theme }) => `color:${theme?.colors?.invertedText};`}
`

export const ButtonStyled = styled.button`
  border: 0;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.s};
  padding: 12px 24px;

  ${defaultStyles}
`
ButtonStyled.displayName = 'ButtonStyled'

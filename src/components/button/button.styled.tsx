'use client'

import styled, { css } from 'styled-components'

const defaultStyles = css`
  ${({ theme }) => `background-color:${theme?.colors?.secondary};`}
  ${({ theme }) => `color:${theme?.colors?.text};`}
`

const primaryStyles = css`
  ${({ theme }) => `background-color:${theme?.colors?.primary};`}
  ${({ theme }) => `color:${theme?.colors?.invertedText};`}
`

export const ButtonStyled = styled.button<{ primary?: boolean }>`
  border: 0;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.s};
  padding: 12px 24px;

  ${defaultStyles}
  ${({ primary }) => (primary ?? false) && primaryStyles}
`
ButtonStyled.displayName = 'ButtonStyled'

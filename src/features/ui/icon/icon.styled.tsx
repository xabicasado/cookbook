'use client'

import styled, { css } from 'styled-components'

const sizes = {
  small: css`
    /* TODO Check fontSizes S or M */
    /* font-size: ${({ theme }) => theme?.fontSize?.s}; */
    font-size: ${({ theme }) => theme?.fontSize?.m};

    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  `,
  medium: css`
    font-size: ${({ theme }) => theme?.fontSize?.m};
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  `,
  large: css`
    font-size: ${({ theme }) => theme?.fontSize?.l};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  `,
  giant: css`
    font-size: ${({ theme }) => theme?.fontSize?.g};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  `,
}

export const IconStyled = styled.span<{
  size: string
}>`
  /* cursor: pointer; */
  ${({ size }) => sizes[size as keyof typeof sizes]}
`
IconStyled.displayName = 'IconStyled'

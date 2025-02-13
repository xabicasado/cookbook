'use client'

import styled, { css } from 'styled-components'

import type theme from '@/themes/theme'

type CustomTheme = typeof theme

const defaultStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme?.colors?.primary};
`

const primaryStyles = css`
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.invertedText};
`

const paddingStyles = css`
  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.l};
`

const invertedStyles = css`
  background-color: ${({ theme }) => theme?.colors?.invertedText};
  color: ${({ theme }) => theme?.colors?.primary};
`

const getDisabledStyles = ({
  primary,
  theme,
}: {
  primary?: boolean
  theme: CustomTheme
}) => {
  const baseDisabledStyles = css`
    cursor: not-allowed;
  `

  if (primary) {
    return css`
      ${baseDisabledStyles}
      background-color: ${theme?.colors?.secondary};
      color: ${theme?.colors?.textE};
    `
  }

  return css`
    ${baseDisabledStyles}
    color: ${theme?.colors?.secondary};
  `
}

const sizes = {
  small: css`
    height: ${({ theme }) => theme?.spacing?.xxl};
    width: ${({ theme }) => theme?.spacing?.xxl};
  `,
}

export const ButtonStyled = styled.button<{
  disabled?: boolean
  fullWidth?: boolean
  inverted?: boolean
  label?: string
  primary?: boolean
  size: string
  justify: string
}>`
  cursor: pointer;

  border: 0;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  font-size: ${({ theme }) => theme?.fontSize?.s};

  display: flex;
  align-items: center;
  ${({ justify }) => justify !== undefined && `justify-content: ${justify};`}

  ${({ label }) => (label !== undefined ? paddingStyles : 'padding: 0;')}

  ${defaultStyles}
  ${({ primary }) => (primary ?? false) && primaryStyles}
  ${({ inverted }) => (inverted ?? false) && invertedStyles}
  ${({ disabled, primary, theme }) =>
    disabled && getDisabledStyles({ primary, theme })}

  ${({ fullWidth }) => (fullWidth ?? false) && 'width: 100%;'}

  ${({ size }) => sizes[size as keyof typeof sizes]}
  
  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`
ButtonStyled.displayName = 'ButtonStyled'

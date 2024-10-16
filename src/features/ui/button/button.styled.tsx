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

    /* padding: 0 ${({ theme }) => theme?.spacing?.xs}; */

    /* & > * {
      font-size: 1.2rem;
    } */
  `,

  // medium: css`
  //   padding: 0 ${({ theme }) => theme?.spacing?.xs};
  // `,

  // large: css`
  //   padding: 0 ${({ theme }) => theme?.spacing?.xs};
  // `,

  // giant: css`
  //   padding: 0 ${({ theme }) => theme?.spacing?.xs};
  // `,
}

export const ButtonStyled = styled.button<{
  disabled?: boolean
  fullWidth?: boolean
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
  ${({ disabled, primary, theme }) =>
    disabled && getDisabledStyles({ primary, theme })}

  ${({ fullWidth }) => (fullWidth ?? false) && 'width: 100%;'}

  ${({ size }) => sizes[size as keyof typeof sizes]}
  
  /* TODO focus styles */
  /* https://css-tricks.com/overriding-default-button-styles/ */
  /* &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  } */

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`
ButtonStyled.displayName = 'ButtonStyled'

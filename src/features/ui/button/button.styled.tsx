'use client'

import styled, { css } from 'styled-components'

const defaultStyles = css`
  background-color: transparent;
  ${({ theme }) => `color: ${theme?.colors?.primary};`}
`

const primaryStyles = css`
  ${({ theme }) => `background-color: ${theme?.colors?.primary};`}
  ${({ theme }) => `color: ${theme?.colors?.invertedText};`}
`

const disabledStyles = css`
  cursor: not-allowed;
  ${({ theme }) => `background-color: ${theme?.colors?.secondary};`}
  ${({ theme }) => `color: ${theme?.colors?.textE};`}
`

const sizes = {
  small: css`
    display: flex;
    align-items: center;
    justify-content: center;

    /* ${({ theme }) => `height: ${theme?.spaces?.xxl};`}
    ${({ theme }) => `width: ${theme?.spaces?.xxl};`} */

    /* height: ${({ theme }) => theme?.spaces?.xxl};
    width: ${({ theme }) => theme?.spaces?.xxl}; */

    /* TODO change to spacing */
    width: 3rem;
    height: 3rem;
    /* height: auto; */

    /* & > * {
      font-size: 1.2rem;
    } */

    /* padding: 0 ${({ theme }) => theme?.spaces?.xs}; */
  `,
  // medium: css`
  //   height: 36px;
  //   padding: 0 ${({ theme }) => theme?.spaces?.xs};
  // `,
  // large: css`
  //   height: 36px;
  //   padding: 0 ${({ theme }) => theme?.spaces?.xs};
  // `,
}

export const ButtonStyled = styled.button<{
  disabled?: boolean
  primary?: boolean
  fullWidth?: boolean
  size: string
}>`
  border: 0;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  font-size: ${({ theme }) => theme?.fontSize?.s};

  /* TODO change to spacing */
  padding: 12px 24px;

  ${defaultStyles}
  ${({ primary }) => (primary ?? false) && primaryStyles}
  ${({ disabled }) => (disabled ?? false) && disabledStyles}
  
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

export const ButtonIconStyled = styled.span`
  /* font-family: 'Material Symbols Rounded'; */
  font-family: ${({ theme }) => theme?.fonts?.materialSymbolsRounded};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  /* font-size: 1.2rem; */
  font-size: ${({ theme }) => theme?.fontSize?.l};
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;

  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`
ButtonIconStyled.displayName = 'ButtonIconStyled'

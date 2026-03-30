'use client'

import styled, { css } from 'styled-components'

const hasPaddingStyles = css`
  padding-inline: ${({ theme }) => theme?.spacing?.l};
`

export const TextareaStyled = styled.textarea<{
  $hasPadding?: boolean
}>`
  resize: none;
  field-sizing: content;

  font-family: inherit;
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  width: 100%;
  min-height: ${({ theme }) => theme?.spacing?.xxl};

  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.l};

  padding: ${({ theme }) => theme?.spacing?.xs};

  ${({ $hasPadding }) => $hasPadding && hasPaddingStyles}
  /* margin: ${({ theme }) => theme?.spacing?.xs}; */

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
      ${({ theme }) => theme?.colors?.primary};
  }
`
TextareaStyled.displayName = 'TextareaStyled'

export const LabelStyled = styled.label`
  cursor: pointer;
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
LabelStyled.displayName = 'displayName'

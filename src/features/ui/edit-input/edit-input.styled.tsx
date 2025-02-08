'use client'

import styled, { css } from 'styled-components'

const defaultStyles = css`
  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.text};

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
      ${({ theme }) => theme?.colors?.primary};
  }
`

const invertedStyles = css`
  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.invertedText};
  background-color: transparent;
  color: ${({ theme }) => theme?.colors?.invertedText};

  &::placeholder {
    color: ${({ theme }) => theme?.colors?.invertedText};
    /* font-weight: ${({ theme }) => theme?.fontWeight?.bold}; */
    opacity: 1;
  }

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.invertedText};
    box-shadow: ${({ theme }) => theme?.boxShadows?.level2}
      ${({ theme }) => theme?.colors?.invertedText};
  }
`

export const EditInputStyled = styled.input<{
  type?: string
  inverted?: boolean
}>`
  width: 100%;

  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.l};

  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-size: ${({ theme }) => theme?.fontSize?.l};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  ${defaultStyles}
  ${({ inverted }) => (inverted ?? false) && invertedStyles}

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
  }
`
EditInputStyled.displayName = 'EditInputStyled'

export const LabelStyled = styled.label`
  cursor: pointer;
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
LabelStyled.displayName = 'displayName'

export const SubTextStyled = styled.span`
  display: block;
  padding-inline: ${({ theme }) => theme?.fontSize?.m};
  font-size: ${({ theme }) => theme?.fontSize?.s};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  color: ${({ theme }) => theme?.colors?.textC};

  /* &:before {
    content: 'URL: ';
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    color: ${({ theme }) => theme?.colors?.textB};
  } */
`
SubTextStyled.displayName = 'SubTextStyled'

export const PasswordSectionStyled = styled.span`
  position: relative;
`
PasswordSectionStyled.displayName = 'PasswordSectionStyled'

export const PasswordButtonStyled = styled.span`
  z-index: ${({ theme }) => theme?.layers?.mars};

  position: absolute;
  top: ${({ theme }) => theme?.spacing?.m};
  right: ${({ theme }) => theme?.spacing?.l};
`
PasswordButtonStyled.displayName = 'PasswordButtonStyled'

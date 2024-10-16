'use client'

import styled from 'styled-components'

// export const EditInputStyled = styled.input<{ type?: string }>`
export const EditInputStyled = styled.input.attrs(() => ({
  type: 'text',
}))`
  /* width: 100%; */

  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.l};
  /* padding-inline: ${({ theme }) => theme?.spacing?.m}; */

  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-size: ${({ theme }) => theme?.fontSize?.l};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

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
EditInputStyled.displayName = 'EditInputStyled'

export const LabelStyled = styled.label`
  cursor: pointer;
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
LabelStyled.displayName = 'displayName'

export const SubTextStyled = styled.span`
  display: block;
  padding-inline: 24px;
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

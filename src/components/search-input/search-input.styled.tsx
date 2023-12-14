'use client'

import styled from 'styled-components'

export const SearchInputStyled = styled.input`
  border: 2px solid ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  font-family: ${({ theme }) => theme?.fonts?.quicksand};

  font-size: ${({ theme }) => theme?.fontSize?.h3};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};

  margin: 0.5em 0;
  padding: 12px 24px;
  width: 100%;

  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    /* outline-width: 0; */

    border-color: ${({ theme }) => theme?.colors?.primary};
    // TODO box-shadow with transition
    /* box-shadow: ; */
    transition: border-color 0.3s ease-in-out;
  }
`
SearchInputStyled.displayName = 'SearchInputStyled'

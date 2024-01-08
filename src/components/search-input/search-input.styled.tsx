import styled from 'styled-components'

export const SearchInputStyled = styled.input.attrs((props) => ({
  type: 'search',
}))`
  border: 0.15rem solid ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  font-family: ${({ theme }) => theme?.fonts?.quicksand};

  font-size: ${({ theme }) => theme?.fontSize?.l};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  margin: 0.5em 0;
  padding: 12px 24px;
  width: 100%;

  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    /* outline-width: 0; */

    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme.boxShadows.level1};

    transition: border-color 0.3s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
  }

  &::placeholder {
    color: ${({ theme }) => theme?.colors?.textE};
    opacity: 1;
  }
  /* &::-ms-input-placeholder {
    color: ${({ theme }) => theme?.colors?.textE};
  }
  &::-moz-placeholder {
    color: ${({ theme }) => theme?.colors?.textE};
  }
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme?.colors?.textE};
  } */
`
SearchInputStyled.displayName = 'SearchInputStyled'

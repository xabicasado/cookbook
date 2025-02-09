import styled from 'styled-components'

// export const SearchBarStyled = styled.input<{ type: 'search' }>`
export const SearchBarStyled = styled.input.attrs(() => ({
  type: 'search',
}))`
  /* width: 100%; */

  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  font-family: ${({ theme }) => theme?.fonts?.quicksand};

  font-size: ${({ theme }) => theme?.fontSize?.l};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.l};
  /* padding-inline: ${({ theme }) => theme?.spacing?.m}; */

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  text-overflow: ellipsis;
  white-space: nowrap;
  /* overflow: hidden; */

  &:focus {
    outline: none;
    /* outline-width: 0; */

    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
      ${({ theme }) => theme?.colors?.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme?.colors?.textE};
    opacity: 1;

    /* text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; */
  }

  &::-webkit-search-cancel-button {
    cursor: pointer;
    /* color: ${({ theme }) => theme?.colors?.primary}; */
    /* -webkit-appearance: none; */
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
SearchBarStyled.displayName = 'SearchBarStyled'

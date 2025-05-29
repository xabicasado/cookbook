import styled from 'styled-components'

export const SearchSelectStyled = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;

  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  font-family: inherit;
  /* font-family: ${({ theme }) => theme?.fonts?.quicksand}; */

  font-size: ${({ theme }) => theme?.fontSize?.l};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.l};

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  text-overflow: ellipsis;
  white-space: nowrap;

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
      ${({ theme }) => theme?.colors?.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme?.colors?.textE};
    opacity: 1;
  }
`
SearchSelectStyled.displayName = 'SearchSelectStyled'

export const LabelStyled = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
LabelStyled.displayName = 'LabelStyled'

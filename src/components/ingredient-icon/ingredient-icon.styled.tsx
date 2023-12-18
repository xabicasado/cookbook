import styled from 'styled-components'

export const IngredientIconStyled = styled.span`
  font-size: 0.9rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  background-color: ${({ theme }) => theme?.colors?.invertedText};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`
IngredientIconStyled.displayName = 'IngredientIconStyled'

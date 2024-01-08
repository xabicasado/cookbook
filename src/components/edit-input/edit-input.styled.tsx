import styled from 'styled-components'

export const EditInputContainerStyled = styled.div`
  margin: 0.5em 0;
`
EditInputContainerStyled.displayName = 'EditInputContainerStyled'

export const EditInputStyled = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 100%;
  padding: 12px 24px;

  border: 0.15rem solid ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-size: ${({ theme }) => theme?.fontSize?.l};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme.boxShadows.level1};
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
  padding: 0 24px;
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

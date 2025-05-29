import styled from 'styled-components'

export const ServingsStyled = styled.section`
  display: flex;
  align-items: center;
`
ServingsStyled.displayName = 'ServingsStyled'

export const ServingsDisplayStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;

  height: ${({ theme }) => theme?.spacing?.xxl};
  width: ${({ theme }) => theme?.spacing?.xxl};
`
ServingsDisplayStyled.displayName = 'ServingsDisplayStyled'

import styled from 'styled-components'

export const ServingsSectionStyled = styled.section`
  display: flex;
  align-items: center;
`
ServingsSectionStyled.displayName = 'ServingsSectionStyled'

export const ServingsDisplayStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;

  height: ${({ theme }) => theme?.spacing?.xxl};
  width: ${({ theme }) => theme?.spacing?.xxl};
`
ServingsDisplayStyled.displayName = 'ServingsDisplayStyled'

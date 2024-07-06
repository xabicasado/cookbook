import styled from 'styled-components'

export const StepsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme?.spacing?.xs};
`
StepsListStyled.displayName = 'StepsListStyled'

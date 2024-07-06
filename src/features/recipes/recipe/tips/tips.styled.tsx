import styled from 'styled-components'

export const TipsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme?.spacing?.xs};
`
TipsListStyled.displayName = 'TipsListStyled'

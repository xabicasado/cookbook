import styled from 'styled-components'

export const NumberRangeStyled = styled.section`
  display: flex;
  align-items: center;
`
NumberRangeStyled.displayName = 'NumberRangeStyled'

export const CurrentNumberStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  height: ${({ theme }) => theme?.spacing?.xxl};
  width: ${({ theme }) => theme?.spacing?.xxl};
`
CurrentNumberStyled.displayName = 'CurrentNumberStyled'

export const LabelStyled = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
LabelStyled.displayName = 'LabelStyled'

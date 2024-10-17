import styled from 'styled-components'

export const HeaderStyled = styled.header`
  /* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sticky_header */
  /* https://css-tricks.com/creating-sliding-effects-using-sticky-positioning/ */
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: ${({ theme }) => theme?.spacing?.m};
  padding-bottom: ${({ theme }) => theme?.spacing?.xs};

  background-color: ${({ theme }) => theme?.colors?.invertedText};
  color: ${({ theme }) => theme?.colors?.primary};
  box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
    ${({ theme }) => theme?.colors?.primary};
`
HeaderStyled.displayName = 'HeaderStyled'

export const HeaderTitleStyled = styled.span`
  &:active {
    transform: scale(0.99);
  }
`
HeaderTitleStyled.displayName = 'HeaderTitleStyled'

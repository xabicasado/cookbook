import styled from 'styled-components'

export const HeaderStyled = styled.header`
  /* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sticky_header */
  /* https://css-tricks.com/creating-sliding-effects-using-sticky-positioning/ */
  z-index: ${({ theme }) => theme?.layers?.mars};

  position: sticky;
  top: 0;
  width: 100%;

  background-color: ${({ theme }) => theme?.colors?.invertedText};
  color: ${({ theme }) => theme?.colors?.primary};

  box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
    ${({ theme }) => theme?.colors?.primary};
`
HeaderStyled.displayName = 'HeaderStyled'

export const HeaderSectionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: ${({ theme }) => theme?.spacing?.m};
`
HeaderSectionStyled.displayName = 'HeaderSectionStyled'

export const HeaderTitleStyled = styled.span`
  display: flex;

  &:active {
    transform: scale(0.99);
  }
`
HeaderTitleStyled.displayName = 'HeaderTitleStyled'

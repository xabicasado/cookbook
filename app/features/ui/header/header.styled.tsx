import styled from 'styled-components'

export const HeaderStyled = styled.header`
  /* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sticky_header */
  /* https://css-tricks.com/creating-sliding-effects-using-sticky-positioning/ */
  position: sticky;
  top: 0;

  /* z-index: ${({ theme }) => theme?.layers?.saturn}; */
  z-index: ${({ theme }) => theme?.layers?.mars};

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* TODO Change to grid layout */
  padding-inline: ${({ theme }) => theme?.spacing?.m};
  padding-bottom: ${({ theme }) => theme?.spacing?.xxs};

  background-color: ${({ theme }) => theme?.colors?.invertedText};
  color: ${({ theme }) => theme?.colors?.primary};
  box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
    ${({ theme }) => theme?.colors?.primary};
`
HeaderStyled.displayName = 'HeaderStyled'

export const HeaderTitleStyled = styled.span`
  display: flex;

  &:active {
    transform: scale(0.99);
  }
`
HeaderTitleStyled.displayName = 'HeaderTitleStyled'

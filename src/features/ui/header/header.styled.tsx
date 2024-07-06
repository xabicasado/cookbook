import styled from 'styled-components'

export const HeaderStyled = styled.header`
  z-index: ${({ theme }) => theme?.layers?.mars};

  background-color: ${({ theme }) => theme?.colors?.invertedText};
  width: 100%;

  box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
    ${({ theme }) => theme?.colors?.primary};

  /* border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.invertedText}; */

  /* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sticky_header */
  /* https://css-tricks.com/creating-sliding-effects-using-sticky-positioning/ */
  /* position: -webkit-sticky; */
  position: sticky;
  top: 0;
  /* position: fixed; */
  /* top: 0;
  left: 0;
  right: 0; */
  /* height: 80px; */
`
HeaderStyled.displayName = 'HeaderStyled'

export const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-inline: auto;
  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.m};
`
HeaderContainerStyled.displayName = 'HeaderContainerStyled'

export const HeaderTitleStyled = styled.span`
  &:active {
    transform: scale(0.99);
  }
`
HeaderTitleStyled.displayName = 'HeaderTitleStyled'

export const HeaderMenuStyled = styled.span`
  cursor: pointer;
  /* font-size: ${({ theme }) => theme?.fontSize?.h1}; */
  color: ${({ theme }) => theme?.colors?.primary};
  /* font-weight: ${({ theme }) => theme?.fontWeight?.semiBold}; */

  display: flex;
  align-items: center;
  justify-content: center;

  /* &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  } */
`
HeaderMenuStyled.displayName = 'HeaderMenuStyled'

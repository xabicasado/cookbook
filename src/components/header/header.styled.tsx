import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: inline-block;
  background-color: ${({ theme }) => theme?.colors?.invertedText};
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadows.level1};

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
  overflow: hidden;
  line-height: 2;
  margin: auto;
  padding: 0 30px;
  /* padding: 5px 30px; */
`
HeaderContainerStyled.displayName = 'HeaderContainerStyled'

export const HeaderTitleStyled = styled.span`
  float: left;
`
HeaderTitleStyled.displayName = 'HeaderTitleStyled'

export const HeaderMenuStyled = styled.span`
  cursor: pointer;
  font-size: ${({ theme }) => theme?.fontSize?.h1};
  color: ${({ theme }) => theme?.colors?.primary};
  font-family: ${({ theme }) => theme?.fonts?.dancingScript};
  /* font-weight: ${({ theme }) => theme?.fontWeight?.semiBold}; */
  float: right;
`
HeaderMenuStyled.displayName = 'HeaderMenuStyled'

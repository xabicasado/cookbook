import styled, { css } from 'styled-components'

const closedStyles = css`
  width: 0%;
`

const openedStyles = css`
  width: 100%;
`

export const MenuStyled = styled.nav<{ isOpen?: boolean }>`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme?.colors?.fourth};
  opacity: 0.9;
  overflow-x: hidden;
  transition: 0.5s;

  ${closedStyles}
  ${({ isOpen }) => (isOpen ?? false) && openedStyles}
`
MenuStyled.displayName = 'MenuStyled'

export const MenuOverlayStyled = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: ${({ theme }) => theme?.fontSize?.h2};
  font-family: ${({ theme }) => theme?.fonts?.lexend};
  font-weight: ${({ theme }) => theme?.fontWeight?.extraBold};
  color: ${({ theme }) => theme?.colors?.invertedText};

  /* font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold}; */

  /* font-family: ${({ theme }) => theme?.fonts?.raleway};
  font-weight: ${({ theme }) => theme?.fontWeight?.black}; */

  /* font-family: ${({ theme }) => theme?.fonts?.robotoMono};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold}; */

  /* font-family: ${({ theme }) => theme?.fonts?.varelaRound};
  text-transform: uppercase; */
`
MenuOverlayStyled.displayName = 'MenuOverlayStyled'

export const MenuHeaderContainerStyled = styled.div`
  overflow: hidden;
  margin: 0 auto;
  padding: 1rem 24px;
  text-align: center;
`
MenuHeaderContainerStyled.displayName = 'MenuHeaderContainerStyled'

export const CloseButtonStyled = styled.span`
  cursor: pointer;
  /* position: absolute; */
  /* top: 0.1rem; */
  /* right: 2.6rem; */
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-size: ${({ theme }) => theme?.fontSize?.h1};

  /* font-family: ${({ theme }) => theme?.fonts?.dancingScript}; */
  /* font-weight: ${({ theme }) => theme?.fontWeight?.semiBold}; */
  float: right;
`
CloseButtonStyled.displayName = 'CloseButtonStyled'

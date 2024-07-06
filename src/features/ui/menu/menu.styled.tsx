import styled, { css } from 'styled-components'

const closedStyles = css`
  width: 0%;
`

const openedStyles = css`
  width: 100%;
`

const disabledLinkStyles = css`
  pointer-events: none;

  color: ${({ theme }) => theme?.colors?.disabledText};

  text-decoration: underline;
  text-decoration-thickness: 0.25em;
  text-underline-offset: 0.17em;
`

export const MenuStyled = styled.nav<{ isOpen?: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;

  z-index: ${({ theme }) => theme?.layers?.saturn};

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

export const MenuHeaderContainerStyled = styled.div`
  display: flex;
  /* justify-content: end; */
  justify-content: space-between;
  color: ${({ theme }) => theme?.colors?.invertedText};

  overflow: hidden;
  margin-inline: auto;
  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.m};
`
MenuHeaderContainerStyled.displayName = 'MenuHeaderContainerStyled'

export const MenuTitleStyled = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.h1};
  font-family: ${({ theme }) => theme?.fonts?.dancingScript};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
`
MenuTitleStyled.displayName = 'MenuTitleStyled'

export const CloseButtonStyled = styled.span`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: scale(0.99);
  }
`
CloseButtonStyled.displayName = 'CloseButtonStyled'

export const MenuOverlayListStyled = styled.ul`
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
MenuOverlayListStyled.displayName = 'MenuOverlayListStyled'

export const MenuLinkStyled = styled.li<{ isActive?: boolean }>`
  /* pointer-events: ${(props) => (props.isActive ? 'none' : 'auto')}; */
  ${({ isActive }) => (isActive ?? false) && disabledLinkStyles}

  &:active {
    transform: scale(0.99);
  }

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.25em;
    text-underline-offset: 0.17em;
  }
`
MenuLinkStyled.displayName = 'MenuLinkStyled'

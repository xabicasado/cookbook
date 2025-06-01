import styled, { css } from 'styled-components'

const closedStyles = css`
  right: -100%;
`

const openedStyles = css`
  right: 0;
`

const disabledLinkStyles = css`
  pointer-events: none;

  color: ${({ theme }) => theme?.colors?.disabledText};

  text-decoration: underline;
  text-decoration-thickness: 0.25em;
  text-underline-offset: 0.17em;
`

export const MenuStyled = styled.nav<{ $isOpen?: boolean }>`
  height: 100dvh;
  width: 100%;

  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme?.colors?.fourth};
  opacity: 0.9;
  overflow-x: hidden;

  ${closedStyles}
  ${({ $isOpen }) => ($isOpen ?? false) && openedStyles}
  
  transition: right 0.5s ease;
`
MenuStyled.displayName = 'MenuStyled'

export const MenuHeaderStyled = styled.div`
  min-height: 80px;

  display: flex;
  justify-content: end;

  padding-inline: ${({ theme }) => theme?.spacing?.m};
  padding-bottom: ${({ theme }) => theme?.spacing?.xs};

  & button {
    color: ${({ theme }) => theme?.colors?.invertedText};
  }
`
MenuHeaderStyled.displayName = 'MenuHeaderStyled'

export const MenuOverlayListStyled = styled.ul`
  position: relative;

  top: 25%;
  text-align: center;
  margin-top: ${({ theme }) => theme?.spacing?.l};

  font-size: ${({ theme }) => theme?.fontSize?.h2};
  font-family: ${({ theme }) => theme?.fonts?.lexend};
  font-weight: ${({ theme }) => theme?.fontWeight?.extraBold};
  color: ${({ theme }) => theme?.colors?.invertedText};
`
MenuOverlayListStyled.displayName = 'MenuOverlayListStyled'

export const MenuLinkStyled = styled.li<{ $isActive?: boolean }>`
  cursor: pointer;
  ${({ $isActive }) => ($isActive ?? false) && disabledLinkStyles}

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

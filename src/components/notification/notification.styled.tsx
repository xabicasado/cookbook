import styled, { css } from 'styled-components'

const closedStyles = css`
  height: 0;
  padding: 0;
`

export const NotificationStyled = styled.div<{ isOpen?: boolean }>`
  cursor: pointer;
  display: inline-block;
  /* z-index: -1; */
  height: 2.5rem;
  width: 100%;
  padding: 0.5rem 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme?.colors?.third};

  transition:
    height 1s,
    padding 1s;

  ${({ isOpen }) => !(isOpen ?? false) && closedStyles}
`
NotificationStyled.displayName = 'NotificationStyled'

export const NotificationTextStyled = styled.span`
  position: relative;
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.s};
`
NotificationTextStyled.displayName = 'NotificationTextStyled'

export const CloseButtonStyled = styled.span`
  /* position: absolute; */
  /* top: 0.4rem;
  right: 2.6rem; */
  float: right;
  /* line-height: 2; */
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.m};
`
CloseButtonStyled.displayName = 'CloseButtonStyled'

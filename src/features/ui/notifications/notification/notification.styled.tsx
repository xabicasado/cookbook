import styled, { css } from 'styled-components'

const closedStyles = css`
  bottom: -${({ theme }) => theme?.spacing?.xxl};
`

export const NotificationStyled = styled.section<{ isOpen?: boolean }>`
  cursor: pointer;

  z-index: ${({ theme }) => theme?.layers?.jupiter};
  background-color: ${({ theme }) => theme?.colors?.third};

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme?.spacing?.xl};
  width: 100%;
  padding-block: ${({ theme }) => theme?.spacing?.s};
  padding-inline: ${({ theme }) => theme?.spacing?.l};

  position: fixed;
  bottom: 0;
  left: 0;

  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.s};

  ${({ isOpen }) => !(isOpen ?? false) && closedStyles}

  transition: bottom 1s ease;
`
NotificationStyled.displayName = 'NotificationStyled'

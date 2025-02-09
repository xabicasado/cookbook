import styled, { css } from 'styled-components'

const closedStyles = css`
  bottom: -${({ theme }) => theme?.spacing?.xxl};
  opacity: 0;
`

export const NotificationStyled = styled.section<{ isOpen?: boolean }>`
  cursor: pointer;

  z-index: ${({ theme }) => theme?.layers?.mars};

  /* TODO Add variants with different leftIcon and different background-color */
  background-color: ${({ theme }) => theme?.colors?.third};

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  /* TODO Change to grid layout */
  padding-block: ${({ theme }) => theme?.spacing?.s};
  padding-inline: ${({ theme }) => theme?.spacing?.m};

  position: fixed;
  bottom: 0;

  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  font-size: ${({ theme }) => theme?.fontSize?.s};

  ${({ isOpen }) => !(isOpen ?? false) && closedStyles}

  transition:
    bottom 1s ease,
    opacity 1s ease;

  span {
    display: flex;
    align-items: center;
    column-gap: ${({ theme }) => theme?.spacing?.xxs};
  }
`
NotificationStyled.displayName = 'NotificationStyled'

export const DescriptionStyled = styled.span`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme?.spacing?.xxs};
`
DescriptionStyled.displayName = 'DescriptionStyled'

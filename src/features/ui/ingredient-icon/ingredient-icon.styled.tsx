'use client'

import styled, { css } from 'styled-components'

const defaultStyles = css`
  ${({ theme }) => `width: ${theme?.spacing?.l};`}
  ${({ theme }) => `height: ${theme?.spacing?.l};`}
`
const withVisibleNameStyles = css`
  ${({ theme }) => `column-gap: ${theme?.spacing?.xs};`}
  ${({ theme }) => `padding-inline: ${theme?.spacing?.xs};`}
  ${({ theme }) => `padding-block: ${theme?.spacing?.xs};`}
  
  border: ${({ theme }) => theme?.spacing?.xxs} solid
  ${({ theme }) => theme?.colors?.primary};

  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
`

const statuses = {
  default: css`
    /* border: ${({ theme }) => theme?.spacing?.xxs} solid
      ${({ theme }) => theme?.colors?.invertedText}; */

    background-color: ${({ theme }) => theme?.colors?.invertedText};
  `,
  available: css`
    /* border: ${({ theme }) => theme?.spacing?.xxs} solid
      ${({ theme }) => theme?.colors?.invertedText}; */

    background-color: ${({ theme }) => theme?.colors?.complementaryOne};
  `,
  lacking: css`
    /* border: ${({ theme }) => theme?.spacing?.xxs} solid
      ${({ theme }) => theme?.colors?.invertedText}; */

    background-color: ${({ theme }) => theme?.colors?.complementaryTwo};
  `,
  needToGo: css`
    background-color: ${({ theme }) => theme?.colors?.complementaryThree};
  `,
}

export const IngredientIconStyled = styled.span<{
  hasVisibleName?: boolean
  isClosable?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme?.fontSize?.s};

  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.invertedText};

  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  ${({ hasVisibleName }) =>
    !hasVisibleName ? defaultStyles : withVisibleNameStyles}
  ${({ isClosable }) => isClosable && 'cursor: pointer;'}

  background-color: ${({ theme }) => theme?.colors?.primary};
`
IngredientIconStyled.displayName = 'IngredientIconStyled'

export const IngredientEmojiStyled = styled.span<{
  status: string
}>`
  ${({ status }) => statuses[status as keyof typeof statuses]}
  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.invertedText};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
`
IngredientEmojiStyled.displayName = 'IngredientEmojiStyled'

export const IngredientNameStyled = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  /* font-weight: ${({ theme }) => theme?.fontWeight?.medium}; */
`
IngredientNameStyled.displayName = 'IngredientNameStyled'

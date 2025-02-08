import styled, { css } from 'styled-components'

import { CardStyled, TitleStyled } from '@/features/ui/card/card.styled'

const defaultSkeletonStyles = css`
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  background-color: ${({ theme }) => theme?.colors?.invertedText};
`

const animationStyles = css`
  @keyframes skeleton-loading {
    0% {
      opacity: 0.9;
    }
    100% {
      opacity: 0.75;
    }
  }

  animation: skeleton-loading 1s linear infinite alternate;
`

// https://css-tricks.com/building-skeleton-screens-css-custom-properties/
export const SkeletonStyled = styled(CardStyled)`
  /* TODO Solve z-index top problem on animation */
  z-index: ${({ theme }) => theme?.layers?.venus};

  ${animationStyles}
`
SkeletonStyled.displayName = 'SkeletonStyled'

export const TitleSkeletonStyled = styled(TitleStyled)`
  ${defaultSkeletonStyles}
  min-height: calc(${({ theme }) => theme?.fontSize?.h3} * ${({ theme }) =>
    theme?.lineHeight?.m});

  ${animationStyles}
`
TitleSkeletonStyled.displayName = 'TitleSkeletonStyled'

export const IngredientsContainerSkeletonStyled = styled.div`
  ${defaultSkeletonStyles}
  min-height: ${({ theme }) => theme?.spacing?.l};
  margin-block: ${({ theme }) => theme?.spacing?.s};

  margin-inline: auto;
  /* max-width: 60%; */
  width: 60%;
  ${animationStyles}
`
IngredientsContainerSkeletonStyled.displayName =
  'IngredientsContainerSkeletonStyled'

'use client'

import { ButtonSectionStyled } from './button-section.styled'
import styled, { css } from 'styled-components'

const animationSkeletonStyles = css`
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

const defaultSkeletonStyles = css`
  background-color: ${({ theme }) => theme?.colors?.primary};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
`

export const ButtonSectionSkeletonStyled = styled(ButtonSectionStyled)<{
  width?: number
}>`
  ${defaultSkeletonStyles}

  min-height: ${({ theme }) => theme?.spacing?.xxl};
  /* TODO Replace 3rem with ${({ theme }) => theme?.spacing?.xxl} */
  /* TODO + spacing?.xs only if width > 1 */
  width: calc(
    3rem * ${({ width }) => width || 1} + ${({ theme }) => theme?.spacing?.xs}
  );

  column-gap: ${({ theme }) => theme?.spacing?.s};

  ${animationSkeletonStyles}
`
ButtonSectionSkeletonStyled.displayName = 'ButtonSectionSkeletonStyled'

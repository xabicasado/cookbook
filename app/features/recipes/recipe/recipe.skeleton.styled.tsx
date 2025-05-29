'use client'

import { HeaderSectionStyled, RecipeStyled } from './recipe.styled'
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
  background-color: ${({ theme }) => theme?.colors?.secondary};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
`

export const HeaderSectionSkeletonStyled = styled(HeaderSectionStyled)`
  min-height: ${({ theme }) => theme?.spacing?.xxl};
`
HeaderSectionSkeletonStyled.displayName = 'HeaderSectionSkeletonStyled'

export const RecipeSkeletonStyled = styled(RecipeStyled)``
RecipeSkeletonStyled.displayName = 'RecipeSkeletonStyled'

export const TitleSkeletonStyled = styled.h2`
  ${defaultSkeletonStyles}
  min-height: calc(${({ theme }) => theme?.fontSize?.h2} * ${({ theme }) =>
    theme?.lineHeight?.m});
  width: 17ch;

  ${animationSkeletonStyles}
`
TitleSkeletonStyled.displayName = 'TitleSkeletonStyled'

export const SectionTitleSkeletonStyled = styled.h3`
  ${defaultSkeletonStyles}
  min-height: calc(${({ theme }) => theme?.fontSize?.h3} * ${({ theme }) =>
    theme?.lineHeight?.m});

  width: 12ch;

  margin-bottom: calc(
    ${({ theme }) => theme?.spacing?.m} +
      (${({ theme }) => theme?.spacing?.xxs} * 2)
  );

  ${animationSkeletonStyles};
`
SectionTitleSkeletonStyled.displayName = 'SectionTitleSkeletonStyled'

export const TextSkeletonStyled = styled.span`
  ${defaultSkeletonStyles}

  display: block;
  min-height: ${({ theme }) => theme?.fontSize?.m};
  width: 20ch;
  margin-block: calc(${({ theme }) => theme?.fontSize?.m} / 2);
  ${animationSkeletonStyles}
`
TextSkeletonStyled.displayName = 'TextSkeletonStyled'

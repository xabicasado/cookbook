import styled, { css } from 'styled-components'

import {
  ButtonSectionStyled,
  RecipeStyled,
} from '@/features/recipes/recipe/recipe.styled'
import { SearchBarStyled } from '@/features/ui/search-bar/search-bar.styled'

const defaultSkeletonStyles = css`
  background-color: ${({ theme }) => theme?.colors?.secondary};
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
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
export const SearchBarSkeletonStyled = styled(SearchBarStyled)`
  ${defaultSkeletonStyles}

  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.secondary};
  min-height: ${({ theme }) => theme?.fontSize?.l};

  ${animationStyles}
`
SearchBarSkeletonStyled.displayName = 'SearchBarSkeletonStyled'

export const SkeletonRecipeStyled = styled(RecipeStyled)`
  /* ${defaultSkeletonStyles} */
  /* z-index: ${({ theme }) => theme?.layers?.venus}; */

  /* ${animationStyles} */
`
SkeletonRecipeStyled.displayName = 'SkeletonRecipeStyled'

export const SkeletonButtonSectionStyled = styled(ButtonSectionStyled)`
  ${defaultSkeletonStyles}
  /* border-radius: ${({ theme }) => theme?.borderRadius?.full}; */
  background-color: ${({ theme }) => theme?.colors?.primary};

  /* TODO change to spacing */
  min-height: 3rem;
  /* max-width: 6rem; */
  width: calc(6rem + ${({ theme }) => theme?.spacing?.xs});

  ${animationStyles}
`
SkeletonButtonSectionStyled.displayName = 'SkeletonButtonSectionStyled'

export const TitleSkeletonStyled = styled.h2`
  ${defaultSkeletonStyles}
  min-height: calc(${({ theme }) => theme?.fontSize?.h2} * ${({ theme }) =>
    theme?.lineHeight?.m});
  /* min-height: ${({ theme }) => theme?.fontSize?.h2}; */
  /* width: 25%; */
  width: 18ch;

  ${animationStyles}
`
TitleSkeletonStyled.displayName = 'TitleSkeletonStyled'

export const SectionTitleSkeletonStyled = styled.h3`
  ${defaultSkeletonStyles}
  min-height: calc(${({ theme }) => theme?.fontSize?.h3} * ${({ theme }) =>
    theme?.lineHeight?.m});
  /* min-height: ${({ theme }) => theme?.fontSize?.h3}; */
  width: 18ch;

  ${animationStyles}
`
SectionTitleSkeletonStyled.displayName = 'SectionTitleSkeletonStyled'

export const TextSkeletonStyled = styled.span`
  ${defaultSkeletonStyles}
  display: block;
  min-height: ${({ theme }) => theme?.fontSize?.m};
  width: 20ch;
  margin-block: calc(${({ theme }) => theme?.fontSize?.m} / 2);
  ${animationStyles}
`
TextSkeletonStyled.displayName = 'TextSkeletonStyled'

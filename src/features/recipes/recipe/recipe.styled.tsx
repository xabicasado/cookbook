'use client'

import styled from 'styled-components'

export const RecipeStyled = styled.article`
  /* line-height: 1.3; */

  display: grid;
  gap: ${({ theme }) => theme?.spacing?.s};

  @media (min-width: 627px) {
    grid-template-columns: 1fr 2fr;
  }

  & section {
    padding-block: ${({ theme }) => theme?.spacing?.sm};
    padding-inline: ${({ theme }) => theme?.spacing?.l};
  }
`
RecipeStyled.displayName = 'RecipeStyled'

export const ButtonSectionStyled = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme?.spacing?.xs};
`
ButtonSectionStyled.displayName = 'ButtonSectionStyled'

export const ScrollWatcherStyled = styled.div`
  height: ${({ theme }) => theme?.spacing?.xs};

  position: fixed;
  bottom: 0;

  z-index: ${({ theme }) => theme?.layers?.mars};
  background-color: ${({ theme }) => theme?.colors?.primary};

  width: 100%;

  scale: 0 1;
  transform-origin: left;
  animation: scroll-watcher linear;
  animation-timeline: scroll();

  @keyframes scroll-watcher {
    to {
      scale: 1 1;
    }
  }
`
ScrollWatcherStyled.displayName = 'ScrollWatcherStyled'

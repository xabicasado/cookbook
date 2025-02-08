'use client'

import styled from 'styled-components'

export const ScrollWatcherStyled = styled.div`
  height: ${({ theme }) => theme?.spacing?.xs};

  /* position: fixed;
  bottom: 0; */

  /* position: sticky;
  top: 0; */

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

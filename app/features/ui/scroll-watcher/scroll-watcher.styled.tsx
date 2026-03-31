'use client'

import styled from 'styled-components'

export const ScrollWatcherStyled = styled.div`
  height: ${({ theme }) => theme?.spacing?.xs};

  background-color: ${({ theme }) => theme?.colors?.primary};

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

'use client'

import styled from 'styled-components'

// https://css-tricks.com/building-skeleton-screens-css-custom-properties/

export const SkeletonStyled = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme?.colors?.primary};
  border-radius: ${({ theme }) => theme?.borderRadius?.m};

  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.75;
    }
  }
`
SkeletonStyled.displayName = 'SkeletonStyled'

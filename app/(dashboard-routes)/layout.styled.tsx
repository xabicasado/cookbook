'use client'

import styled from 'styled-components'

export const MainStyled = styled.main`
  margin-block: ${({ theme }) => theme?.spacing?.l};

  --content-max-width: 140ch;
  --breakout-max-width: 150ch;

  --breakout-size: calc(
    (var(--breakout-max-width) - var(--content-max-width)) / 2
  );

  display: grid;

  grid-template-columns:
    [full-width-start] minmax(${({ theme }) => theme?.spacing?.m}, auto)
    [breakout-start] minmax(
      ${({ theme }) => theme?.spacing?.s},
      var(--breakout-size)
    )
    [content-start] min(
      100% - (${({ theme }) => theme?.spacing?.l} * 2),
      var(--content-max-width)
    )
    [content-end]
    minmax(${({ theme }) => theme?.spacing?.s}, var(--breakout-size))
    [breakout-end]
    minmax(${({ theme }) => theme?.spacing?.m}, auto) [full-width-end];

  row-gap: ${({ theme }) => theme?.spacing?.sm};

  & > :not(.breakout, .full-width),
  .full-width > :not(.breakout, .full-width) {
    grid-column: content;
  }

  & > .breakout {
    grid-column: breakout;
  }

  & > .full-width {
    grid-column: full-width;
    display: grid;
    grid-template-columns: inherit;
  }
`
MainStyled.displayName = 'MainStyled'

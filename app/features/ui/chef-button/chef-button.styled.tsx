import styled, { css } from 'styled-components'

const animationGlowStyles = css`
  @keyframes glow {
    100% {
      --glow-deg: 360deg;
    }
  }

  animation: glow 10s infinite linear;
`

const glowCommonStyles = css`
  @property --glow-deg {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0deg;
  }

  @property --clr-1 {
    syntax: '<color>';
    inherits: true;
    initial-value: ${({ theme }) => theme?.colors?.primary};
  }

  @property --clr-2 {
    syntax: '<color>';
    inherits: true;
    initial-value: ${({ theme }) => theme?.colors?.complementaryTwo};
  }

  @property --clr-3 {
    syntax: '<color>';
    inherits: true;
    initial-value: ${({ theme }) => theme?.colors?.complementaryOne};
  }

  @property --clr-4 {
    syntax: '<color>';
    inherits: true;
    initial-value: ${({ theme }) => theme?.colors?.complementaryThree};
  }
`

export const ChefButtonStyled = styled.div`
  ${glowCommonStyles}

  --gradient-glow:
    var(--clr-1), var(--clr-2), var(--clr-3), var(--clr-4), var(--clr-1);

  border: ${({ theme }) => theme?.spacing?.xxs} solid transparent;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  background:
    linear-gradient(var(--surface, canvas) 0 0) padding-box,
    conic-gradient(from var(--glow-deg), var(--gradient-glow)) border-box;

  position: relative;
  isolation: isolate;

  ${animationGlowStyles}

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
  }

  &::before {
    z-index: -1;
    background: var(--surface, canvas);
    inset: ${({ theme }) => theme?.spacing?.xxs};
    filter: blur(${({ theme }) => theme?.spacing?.m});
  }

  &::after {
    z-index: -2;
    inset: -${({ theme }) => theme?.spacing?.s};
    background: conic-gradient(from var(--glow-deg), var(--gradient-glow));
    filter: blur(${({ theme }) => theme?.spacing?.m});
    opacity: var(--glow-intensity, 0.125);
  }

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }

  & button {
    font-style: italic;
  }
`
ChefButtonStyled.displayName = 'ChefButtonStyled'

import styled from 'styled-components'

export const PageSectionStyled = styled.section`
  /* display: flex; */
  /* row-gap: ${({ theme }) => theme?.spacing?.m}; */
  /* flex-direction: column; */
  text-wrap: pretty;
  /* overflow-wrap: break-word; */
`
PageSectionStyled.displayName = 'PageSectionStyled'

export const TitleStyled = styled.h3`
  /* TODO Revisar margin-bottom */
  margin-bottom: ${({ theme }) => theme?.spacing?.sm};

  &::after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme?.colors?.primary};
    width: ${({ theme }) => theme?.spacing?.m};
    height: ${({ theme }) => theme?.spacing?.xs};
    margin-block: ${({ theme }) => theme?.spacing?.xxs};
    /* margin-inline-start: ${({ theme }) => theme?.spacing?.xxs}; */
  }
`
TitleStyled.displayName = 'TitleStyled'

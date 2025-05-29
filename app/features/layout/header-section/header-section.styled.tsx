'use client'

import styled from 'styled-components'

export const HeaderSectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* TODO Revisar el margen inferior */
  margin-block: ${({ theme }) => theme?.spacing?.xs};
`
HeaderSectionStyled.displayName = 'HeaderSectionStyled'

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

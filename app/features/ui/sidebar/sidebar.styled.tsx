'use client'

import styled, { css } from 'styled-components'

const closedBackgroundStyles = css`
  opacity: 0;
  top: -100%;
  /* visibility: hidden; */
`

export const SidebarOverlayStyled = styled.div<{ $isOpen?: boolean }>`
  /* TODO check z-index */
  /* z-index: ${({ theme }) => theme?.layers?.jupiter}; */
  z-index: ${({ theme }) => theme?.layers?.mars};

  height: 100dvh;
  width: 100%;

  position: fixed;
  top: 0;

  background-color: ${({ theme }) => theme?.colors?.third};

  opacity: 0.9;
  ${({ $isOpen }) => !($isOpen ?? false) && closedBackgroundStyles}

  transition: opacity 1s ease;
  /* , top 1s ease; */
  /* , visibility 1s ease; */
`
SidebarOverlayStyled.displayName = 'SidebarOverlayStyled'

const closedStyles = css`
  /* bottom: -${({ theme }) => theme?.spacing?.xxl}; */
  bottom: -100%;
`

export const SidebarStyled = styled.section<{ $isOpen?: boolean }>`
  background-color: ${({ theme }) => theme?.colors?.invertedText};
  z-index: ${({ theme }) => theme?.layers?.mars};

  width: 100%;

  position: fixed;
  bottom: 0;

  border-top-left-radius: ${({ theme }) => theme?.borderRadius?.l};
  border-top-right-radius: ${({ theme }) => theme?.borderRadius?.l};

  padding-block: ${({ theme }) => theme?.spacing?.s};
  padding-inline: ${({ theme }) => theme?.spacing?.m};

  ${({ $isOpen }) => !($isOpen ?? false) && closedStyles}

  transition: bottom 1s ease;

  & span {
    cursor: pointer;
  }
`
SidebarStyled.displayName = 'SidebarStyled'

export const SidebarHeaderSectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
SidebarHeaderSectionStyled.displayName = 'SidebarHeaderSectionStyled'

export const SidebarSectionStyled = styled.section`
  text-wrap: pretty;
`
SidebarSectionStyled.displayName = 'SidebarSectionStyled'

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
  }
`
TitleStyled.displayName = 'TitleStyled'

'use client'

import styled from 'styled-components'

// ButtonSectionStyled
export const ButtonContainerStyled = styled.div`
  padding-top: 0.5rem;
  display: inline-flex;

  & span {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    width: 3rem;
  }
`
ButtonContainerStyled.displayName = 'ButtonContainerStyled'

export const ButtonStyled = styled.div`
  display: inline-block;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`
ButtonStyled.displayName = 'ButtonStyled'

export const RecipeSectionStyled = styled.div`
  /* padding: 0.5em 0; */
  /* padding: 20px 30px; */
  padding: 0.5em 30px;
`
RecipeSectionStyled.displayName = 'RecipeSectionStyled'

export const RecipeSectionContentStyled = styled.div`
  padding: 0.5em 0;
  /* padding: 20px 0; */

  line-height: 1.3;
  /* text-wrap: balance; */
`
RecipeSectionContentStyled.displayName = 'RecipeSectionContentStyled'

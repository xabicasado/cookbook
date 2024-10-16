import styled from 'styled-components'

export const RecipeStyled = styled.article`
  display: grid;

  column-gap: ${({ theme }) => theme?.spacing?.sm};
  row-gap: ${({ theme }) => theme?.spacing?.m};

  @media (627px <= width) {
    grid-template-columns: 1fr 2fr;

    grid-template-areas:
      'ingredients steps'
      'ingredients tips';

    /* First child (Ingredients) */
    > *:nth-child(1) {
      grid-area: ingredients;
    }
    /* Second child (Steps) */
    > *:nth-child(2) {
      grid-area: steps;
    }
    /* Third child (Tips) */
    > *:nth-child(3) {
      grid-area: tips;
    }
  }
`
RecipeStyled.displayName = 'RecipeStyled'

export const HeaderSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;

  align-items: center;
`
HeaderSectionStyled.displayName = 'HeaderSectionStyled'

export const SectionTitleStyled = styled.h3`
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
SectionTitleStyled.displayName = 'SectionTitleStyled'

export const ButtonSectionStyled = styled.section`
  display: flex;
  gap: ${({ theme }) => theme?.spacing?.xxs};
`
ButtonSectionStyled.displayName = 'ButtonSectionStyled'

export const RecipeSectionStyled = styled.section`
  text-wrap: pretty;
`
RecipeSectionStyled.displayName = 'RecipeSectionStyled'

export const ServingsSectionStyled = styled.span`
  display: flex;
  align-items: center;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
  }
`
ServingsSectionStyled.displayName = 'ServingsSectionStyled'

export const ListSectionStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme?.spacing?.xs};
`
ListSectionStyled.displayName = 'ListSectionStyled'

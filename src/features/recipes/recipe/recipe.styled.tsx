import styled from 'styled-components'

export const RecipeStyled = styled.article`
  display: grid;
  column-gap: ${({ theme }) => theme?.spacing?.sm};
  row-gap: ${({ theme }) => theme?.spacing?.m};

  @media (627px <= width) {
    grid-template-columns: 1fr 2fr;
  }
`
RecipeStyled.displayName = 'RecipeStyled'

export const RecipeColumnStyled = styled.section`
  display: grid;
  row-gap: ${({ theme }) => theme?.spacing?.m};
`
RecipeColumnStyled.displayName = 'RecipeColumnStyled'

export const HeaderSectionStyled = styled.section`
  display: flex;
  /* TODO Title centered but button on top */
  align-items: center;
  justify-content: space-between;
`
HeaderSectionStyled.displayName = 'HeaderSectionStyled'

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

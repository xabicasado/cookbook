'use client'

import {
  ButtonSectionSkeletonStyled,
  HeaderSectionSkeletonStyled,
  RecipeSkeletonStyled,
  SectionTitleSkeletonStyled,
  TextSkeletonStyled,
  TitleSkeletonStyled,
} from './recipe.skeleton.styled'

export function RecipeSkeleton() {
  return (
    <>
      <HeaderSectionSkeletonStyled>
        <TitleSkeletonStyled />
        <ButtonSectionSkeletonStyled />
      </HeaderSectionSkeletonStyled>

      <RecipeSkeletonStyled>
        <section>
          <SectionTitleSkeletonStyled />
          <ul>
            {Array(3)
              .fill(undefined)
              .map((_, index) => (
                <li key={index}>
                  <TextSkeletonStyled key={index} />
                </li>
              ))}
          </ul>
        </section>

        <section>
          <SectionTitleSkeletonStyled />
          <ul>
            {Array(3)
              .fill(undefined)
              .map((_, index) => (
                <li key={index}>
                  <TextSkeletonStyled key={index} />
                </li>
              ))}
          </ul>
        </section>

        <section>
          <ul>
            {Array(3)
              .fill(undefined)
              .map((_, index) => (
                <li key={index}>
                  <TextSkeletonStyled key={index} />
                </li>
              ))}
          </ul>
        </section>
      </RecipeSkeletonStyled>
    </>
  )
}

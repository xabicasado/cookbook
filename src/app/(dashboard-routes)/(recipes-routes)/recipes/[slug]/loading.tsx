'use client'

import {
  ButtonSectionSkeletonStyled,
  HeaderSectionSkeletonStyled,
  RecipeSkeletonStyled,
  SectionTitleSkeletonStyled,
  TextSkeletonStyled,
  TitleSkeletonStyled,
} from './loading.styled'

export default function LoadingRecipePage() {
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

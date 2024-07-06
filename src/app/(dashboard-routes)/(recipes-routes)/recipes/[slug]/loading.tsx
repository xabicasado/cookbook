'use client'

import {
  SectionTitleSkeletonStyled,
  SkeletonButtonSectionStyled,
  SkeletonRecipeStyled,
  TextSkeletonStyled,
  TitleSkeletonStyled,
} from './loading.styled'

export default function LoadingRecipePage() {
  return (
    <>
      <TitleSkeletonStyled />
      <SkeletonRecipeStyled>
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

        <div>
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
        </div>
      </SkeletonRecipeStyled>
      <SkeletonButtonSectionStyled />
    </>
  )
}

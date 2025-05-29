import {
  HeaderSectionSkeletonStyled,
  RecipeSkeletonStyled,
  SectionTitleSkeletonStyled,
  TextSkeletonStyled,
  TitleSkeletonStyled,
} from './recipe.skeleton.styled'

import { ButtonSectionSkeleton } from '@/app/features/layout'

export function RecipeSkeleton() {
  return (
    <>
      <HeaderSectionSkeletonStyled>
        <TitleSkeletonStyled />
        <ButtonSectionSkeleton />
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

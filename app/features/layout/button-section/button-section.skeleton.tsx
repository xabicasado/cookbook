import { ButtonSectionSkeletonStyled } from './button-section.skeleton.styled'
import type { ButtonSectionSkeletonProps } from './types'

export function ButtonSectionSkeleton({
  width = 2,
}: ButtonSectionSkeletonProps) {
  return <ButtonSectionSkeletonStyled width={width} />
}

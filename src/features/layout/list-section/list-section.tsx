import { ListSectionStyled } from './list-section.styled'
import type { ListSectionProps } from './types'

export function ListSection({ children }: ListSectionProps) {
  return <ListSectionStyled>{children}</ListSectionStyled>
}

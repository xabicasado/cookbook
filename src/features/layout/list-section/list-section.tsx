import { ListSectionStyled } from './list-section.styled'
import type { ListSectionProps } from './types'

export function ListSection({ children, size = 'medium' }: ListSectionProps) {
  return <ListSectionStyled size={size}>{children}</ListSectionStyled>
}

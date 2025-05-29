import { HeaderSectionStyled, TitleStyled } from './header-section.styled'
import type { HeaderSectionProps } from './types'

export function HeaderSection({ title, children }: HeaderSectionProps) {
  return (
    <HeaderSectionStyled>
      {title && <TitleStyled>{title}</TitleStyled>}

      {children}
    </HeaderSectionStyled>
  )
}

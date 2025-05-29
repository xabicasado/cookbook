import { ButtonSectionStyled } from './button-section.styled'
import type { ButtonSectionProps } from './types'

export function ButtonSection({ children }: ButtonSectionProps) {
  return <ButtonSectionStyled>{children}</ButtonSectionStyled>
}

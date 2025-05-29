'use client'

import { PageSectionStyled, TitleStyled } from './page-section.styled'
import type { PageSectionProps } from './types'

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <PageSectionStyled>
      {/* TODO HeaderSection and ButtonSection */}
      {title && <TitleStyled>{title}</TitleStyled>}

      {children}
    </PageSectionStyled>
  )
}

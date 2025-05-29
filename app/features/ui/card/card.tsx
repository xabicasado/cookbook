import Link from 'next/link'

import {
  CardStyled,
  DetailsStyled,
  SubtitleStyled,
  TitleStyled,
} from './card.styled'
import type { CardProps } from './types'

/**
 * Displays a summary of a recipe and its ingredients as icons
 */
export function Card({
  title,
  href,
  details,
  children,
  subtitle,
  justify = 'center',
}: CardProps) {
  const card = (
    <CardStyled $justify={justify}>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children}
      {subtitle && <SubtitleStyled>{subtitle}</SubtitleStyled>}

      {details && <DetailsStyled>{details}</DetailsStyled>}
    </CardStyled>
  )

  return href !== undefined ? (
    <Link href={href} passHref>
      {/* passHref Seems to improve SEO and accesibility */}
      {card}
    </Link>
  ) : (
    card
  )
}

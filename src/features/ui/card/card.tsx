import Link from 'next/link'

import {
  CardStyled,
  DetailsStyled,
  SubtitleStyled,
  TitleStyled,
} from './card.styled'
import type { CardPropsType } from './types'

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
}: CardPropsType) {
  const card = (
    <CardStyled justify={justify}>
      {title !== undefined && <TitleStyled>{title}</TitleStyled>}
      {children}
      {subtitle !== undefined && <SubtitleStyled>{subtitle}</SubtitleStyled>}

      {details !== undefined && <DetailsStyled>{details}</DetailsStyled>}
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

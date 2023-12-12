import Link from 'next/link'
import { CardContainer, CardTitle } from './card.styled'

type CardProps = {
  // backgroundColor?: string
  title: string
  href: string
  ingredients: string[]
}

export function Card({
  // backgroundColor,
  title,
  href,
  ingredients,
  ...props
}: CardProps) {
  return (
    <CardContainer>
      <Link href={href}>
        <CardTitle>{title}</CardTitle>
        {/* <hr /> */}
        <p>{ingredients}</p>
      </Link>
    </CardContainer>
  )
}

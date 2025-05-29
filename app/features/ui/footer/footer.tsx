import { FooterStyled } from './footer.styled'

// import type { FooterProps } from './types'

export function Footer() {
  // props: FooterProps
  //   const { title } = props
  const d = new Date()
  const year = d.getFullYear()

  return <FooterStyled>Cookbook - By xabicasado ({year})</FooterStyled>
}

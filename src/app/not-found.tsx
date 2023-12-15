import Link from 'next/link'

import { Button } from '@/components/button'
import { PageContentStyled } from './layout.styled'

export default function NotFound() {
  return (
    <>
      <h2>Vaya, ¿te has perdido?</h2>

      <PageContentStyled></PageContentStyled>
      <Link href={'/'}>
        <Button primary label={'Volver al menú'}></Button>
      </Link>
    </>
  )
}

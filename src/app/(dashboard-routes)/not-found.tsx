import Link from 'next/link'

import { Button } from '@/features/ui'

export default function NotFoundPage() {
  return (
    <>
      <h2>Vaya, ¿te has perdido?</h2>

      <Link href={'/'}>
        <Button primary label={'Volver al menú'}></Button>
      </Link>
    </>
  )
}

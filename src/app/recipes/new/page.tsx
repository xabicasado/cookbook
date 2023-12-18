'use client'

import { useState } from 'react'

import { PageContentStyled } from '@/app/layout.styled'
import { EditInput } from '@/components/edit-input'
import { Button } from '@/components/button'
import { Notification } from '@/components/notification'

export default function NewRecipePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <h2>Añadir receta</h2>
      <PageContentStyled>
        <EditInput id={'Ingredientes'} label={'Ingredientes'} />
        <EditInput id={'Elaboración'} label={'Elaboración'} />
        <EditInput id={'Tips'} label={'Tips'} />
      </PageContentStyled>

      <Button
        primary
        label={'Guardar'}
        onClick={() => {
          setIsOpen(true)
        }}
      />

      <Notification
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={'¡Guardado!'}
      />
    </>
  )
}

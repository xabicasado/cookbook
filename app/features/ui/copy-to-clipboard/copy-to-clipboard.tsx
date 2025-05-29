'use client'

import { useState } from 'react'

import { type CopyToClipboardProps } from './types'

import { Button } from '@/app/features/ui'

export function CopyToClipboard({
  text,
  onClick = () => {},
  ...props
}: CopyToClipboardProps) {
  const [icon, setIcon] = useState<'content_copy' | 'check'>('content_copy')

  const handleClick = () => {
    navigator.clipboard.writeText(text)

    setIcon('check')
    setTimeout(() => {
      setIcon('content_copy')
    }, 3000)

    console.log(text)

    onClick()
  }

  return (
    <Button
      primary
      size="small"
      beforeIcon={icon}
      onClick={handleClick}
      {...props}
    />
  )
}

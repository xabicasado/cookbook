'use client'

import { type CopyToClipboardProps } from './types'

import { Button } from '@/app/features/ui'

export function CopyToClipboard({
  text,
  onClick = () => {},
  ...props
}: CopyToClipboardProps) {
  const handleClick = () => {
    navigator.clipboard.writeText(text)

    onClick()
  }

  return (
    <Button
      primary
      size="small"
      beforeIcon="content_copy"
      onClick={handleClick}
      {...props}
    />
  )
}

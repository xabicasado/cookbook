'use client'

import Link from 'next/link'

import { ChefButtonStyled } from './chef-button.styled'
import type { ChefButtonProps } from './types'

import { Button } from '@/app/features/ui'

// https://codepen.io/kevinpowell/pen/WbbXRPL?%3Feditors=1100
// https://codehim.com/animation-effects/css-glowing-border-animation/
export function ChefButton({ href, label, ...props }: ChefButtonProps) {
  const chefButton = (
    <ChefButtonStyled>
      <Button fullWidth beforeIcon="chef_hat" {...props} label={`"${label}"`} />
    </ChefButtonStyled>
  )

  return !!href ? (
    <Link href={href} passHref>
      {chefButton}
    </Link>
  ) : (
    chefButton
  )
}

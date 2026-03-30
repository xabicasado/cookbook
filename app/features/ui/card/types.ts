import type { ReactNode } from 'react'

export type CardProps = {
  title?: string
  href?: string
  subtitle?: string
  details?: string
  justify?: 'center' | 'start' | 'end'
  children?: ReactNode
}

import type { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'giant'
  /**
   * Button contents
   */
  beforeIcon?: string
  label?: string
  afterIcon?: string
  /**
   * Which width should the button has?
   */
  fullWidth?: boolean
  /**
   * Has the button style invert the colors?
   */
  inverted?: boolean
  justify?: 'start' | 'center' | 'end'
}

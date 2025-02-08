export type ButtonPropsType = {
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
   * Is the button disabled?
   */
  disabled?: boolean
  /**
   * Which width should the button has?
   */
  fullWidth?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Has the button style invert the colors?
   */
  inverted?: boolean
  type?: 'button' | 'submit'
  justify?: 'start' | 'center' | 'end'
}

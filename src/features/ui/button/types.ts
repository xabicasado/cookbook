export type ButtonPropsType = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  // backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  icon?: string
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
  type?: 'button' | 'submit'
}

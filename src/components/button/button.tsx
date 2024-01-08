import { ButtonStyled, ButtonIconStyled } from './button.styled'

type ButtonProps = {
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
}

/**
 * Primary UI component for user interaction
 */
export function Button(props: ButtonProps) {
  const { label, icon, size = 'medium' } = props

  return (
    <ButtonStyled type="button" size={size} {...props}>
      {icon !== undefined ? <ButtonIconStyled>{icon}</ButtonIconStyled> : label}
    </ButtonStyled>
  )
}

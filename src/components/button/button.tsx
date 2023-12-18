import { ButtonStyled } from './button.styled'

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean | false
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  // size?: 'small' | 'medium' | 'large' | 'full'
  /**
   * Button contents
   */
  label: string
  /**
   * Is the button disabled?
   */
  disabled?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export function Button(props: ButtonProps) {
  const { label } = props

  return (
    <ButtonStyled type="button" {...props}>
      {label}
    </ButtonStyled>
  )
}

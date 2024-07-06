import { ButtonIconStyled, ButtonStyled } from './button.styled'
import { type ButtonPropsType } from './types'

/**
 * Primary UI component for user interaction
 */
export function Button(props: ButtonPropsType) {
  const {
    label,
    icon,
    primary = false,
    size = 'medium',
    type = 'button',
    ...restProps
  } = props

  return (
    <ButtonStyled type={type} primary={!!primary} size={size} {...restProps}>
      {icon !== undefined ? <ButtonIconStyled>{icon}</ButtonIconStyled> : label}
    </ButtonStyled>
  )
}

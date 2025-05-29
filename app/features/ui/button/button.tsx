import { Icon } from '../icon'
import { ButtonStyled } from './button.styled'
import { type ButtonProps } from './types'

/**
 * Primary UI component for user interaction
 */
export function Button({
  beforeIcon,
  label,
  afterIcon,
  primary = false,
  size = 'medium',
  type = 'button',
  justify = 'center',
  inverted = false,
  fullWidth = false,
  disabled = false,
  ...restProps
}: ButtonProps) {
  return (
    <ButtonStyled
      type={type}
      $primary={!!primary}
      $inverted={!!inverted}
      $fullWidth={!!fullWidth}
      $disabled={!!disabled}
      disabled={!!disabled}
      label={label}
      size={size}
      $justify={justify}
      {...restProps}
    >
      {beforeIcon !== undefined && <Icon name={beforeIcon} size={size} />}
      {label}
      {afterIcon !== undefined && <Icon name={afterIcon} size={size} />}
    </ButtonStyled>
  )
}

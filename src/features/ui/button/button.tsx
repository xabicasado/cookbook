import { Icon } from '../icon'
import { ButtonStyled } from './button.styled'
import { type ButtonPropsType } from './types'

/**
 * Primary UI component for user interaction
 */
export function Button(props: ButtonPropsType) {
  const {
    beforeIcon,
    label,
    afterIcon,
    primary = false,
    size = 'medium',
    type = 'button',
    justify = 'center',
    ...restProps
  } = props

  return (
    <ButtonStyled
      type={type}
      primary={!!primary}
      label={label}
      size={size}
      justify={justify}
      {...restProps}
    >
      {beforeIcon !== undefined && <Icon name={beforeIcon} size={size} />}
      {label}
      {afterIcon !== undefined && <Icon name={afterIcon} size={size} />}
    </ButtonStyled>
  )
}

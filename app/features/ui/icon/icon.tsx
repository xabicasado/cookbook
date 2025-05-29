import { IconStyled } from './icon.styled'
import type { IconPropsType } from './types'

export function Icon(props: IconPropsType) {
  const { name, size = 'medium', ...restProps } = props

  // https://fonts.google.com/icons?selected=Material+Symbols+Rounded
  // https://developers.google.com/fonts/docs/material_symbols?hl=es-419
  return (
    <IconStyled
      aria-label={`Icono ${name}`}
      className="material-symbols-rounded"
      size={size}
      {...restProps}
    >
      {name}
    </IconStyled>
  )
}

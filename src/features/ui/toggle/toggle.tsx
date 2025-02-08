'use client'

import {
  LabelStyled,
  ToggleLabelStyled,
  ToggleSectionStyled,
  ToggleStyled,
} from './toggle.styled'
import { type ToggleProps } from './types'

export function Toggle(props: ToggleProps) {
  const { name, label, onChange, ...restProps } = props

  return (
    <ToggleSectionStyled {...restProps}>
      <ToggleStyled id={name} onChange={onChange} />
      <ToggleLabelStyled htmlFor={name}></ToggleLabelStyled>

      {label != null && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
    </ToggleSectionStyled>
  )
}

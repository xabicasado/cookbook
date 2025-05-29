'use client'

import {
  LabelStyled,
  // IconStyled,
  ToggleLabelStyled,
  ToggleSectionStyled,
  ToggleStyled,
} from './toggle.styled'
import { type ToggleProps } from './types'

// import { Icon } from '@/features/ui'

// https://webdesign.tutsplus.com/es/toggle-switch-component-with-css-checkbox-hack--cms-35011t
//  https://codepen.io/JiveDig/pen/jbdJXR/
export function Toggle(props: ToggleProps) {
  const { name, label, onChange, ...restProps } = props

  return (
    <ToggleSectionStyled {...restProps}>
      <ToggleStyled id={name} onChange={onChange} />
      <ToggleLabelStyled htmlFor={name}>
        {/* <IconStyled>
          <Icon name="content_copy" />
        </IconStyled> */}
        {/* <IconStyled>
          <Icon name="link" />
        </IconStyled> */}
      </ToggleLabelStyled>

      {label != null && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
    </ToggleSectionStyled>
  )
}

import { LabelStyled, TextareaStyled } from './textarea.styled'
import type { TextareaProps } from './types'

export function Textarea({
  name,
  label,
  hasPadding,
  ...restProps
}: TextareaProps) {
  return (
    <>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <TextareaStyled
        key={name}
        id={name}
        name={name}
        $hasPadding={!!hasPadding}
        {...restProps}
      />
    </>
  )
}

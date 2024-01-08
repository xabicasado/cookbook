import { type ChangeEvent } from 'react'

import {
  EditInputStyled,
  EditInputContainerStyled,
  LabelStyled,
  SubTextStyled,
} from './edit-input.styled'
// import { RecipeSectionStyled, RecipeSectionContentStyled } from '@/components/recipe/recipe.styled'

type EditInputProps = {
  id: string
  label?: string
  subText?: string
  content?: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function EditInput(props: EditInputProps) {
  const { id, label, content, subText, placeholder, onChange } = props

  return (
    <>
      {/* <RecipeSectionStyled> */}
      {label != null && <LabelStyled htmlFor={id}>{label}</LabelStyled>}
      {/* <RecipeSectionContentStyled> */}
      <EditInputContainerStyled>
        <EditInputStyled
          key={id}
          id={id}
          onChange={onChange}
          value={content}
          placeholder={placeholder}
        />
        {subText != null && <SubTextStyled>{subText}</SubTextStyled>}
      </EditInputContainerStyled>
      {/* </RecipeSectionContentStyled> */}
      {/* </RecipeSectionStyled> */}
    </>
  )
}

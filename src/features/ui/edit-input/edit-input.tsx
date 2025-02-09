'use client'

import { useState } from 'react'

import {
  EditInputStyled,
  LabelStyled,
  PasswordButtonStyled,
  PasswordSectionStyled,
  SubTextStyled,
} from './edit-input.styled'
import { type EditInputProps } from './types'

import { Button } from '@/features/ui'

export function EditInput(props: EditInputProps) {
  const {
    name,
    label,
    content,
    subText,
    placeholder,
    onChange,
    required = false,
    type = 'text',
    inverted = false,
  } = props

  const [currentType, setCurrentType] = useState<string>(type)

  const isPasswordInput: boolean = type === 'password'

  const togglePasswordVisibility = () => {
    if (currentType === 'password') setCurrentType('text')
    else setCurrentType('password')
  }

  const editInput = (
    <>
      {label != null && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <EditInputStyled
        key={name}
        id={name}
        name={name}
        onChange={onChange}
        value={content}
        placeholder={placeholder}
        required={!!required}
        inverted={!!inverted}
        type={currentType}
      />

      {/* TODO Delete gap */}
      {subText != null && <SubTextStyled>{subText}</SubTextStyled>}
      {isPasswordInput && (
        <PasswordButtonStyled>
          <Button
            primary
            beforeIcon={
              currentType === 'password' ? 'visibility_off' : 'visibility'
            }
            onClick={togglePasswordVisibility}
          />
        </PasswordButtonStyled>
      )}
    </>
  )

  if (isPasswordInput)
    return <PasswordSectionStyled>{editInput}</PasswordSectionStyled>

  return editInput
}

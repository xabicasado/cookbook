'use client'

import { useState } from 'react'

import {
  EditInputStyled,
  LabelStyled,
  LengthStyled,
  PasswordButtonStyled,
  PasswordSectionStyled,
  SubTextSectionStyled,
  SubTextStyled,
} from './edit-input.styled'
import { type EditInputProps } from './types'

import { Button } from '@/app/features/ui'

export function EditInput(props: EditInputProps) {
  const {
    name,
    label,
    content,
    subText,
    placeholder,
    onChange,
    onInvalid,
    onInput,
    required = false,
    type = 'text',
    inverted = false,
    maxLength,
  } = props

  const [currentType, setCurrentType] = useState<string>(type)

  const isPasswordInput: boolean = type === 'password'

  const togglePasswordVisibility = () => {
    if (currentType === 'password') setCurrentType('text')
    else setCurrentType('password')
  }

  const editInput = (
    <>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <EditInputStyled
        key={name}
        id={name}
        name={name}
        onChange={onChange}
        onInvalid={onInvalid}
        onInput={onInput}
        value={content}
        placeholder={placeholder}
        required={!!required}
        $inverted={!!inverted}
        type={currentType}
        max={maxLength}
      />

      {/* TODO Delete gap */}
      <SubTextSectionStyled>
        {subText != null && <SubTextStyled>{subText}</SubTextStyled>}

        {maxLength && (
          <LengthStyled>
            {/* TODO in red if more than max length */}
            {content?.length ?? 0}/{maxLength}
          </LengthStyled>
        )}
      </SubTextSectionStyled>

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

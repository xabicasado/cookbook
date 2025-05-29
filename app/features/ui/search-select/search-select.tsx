'use client'

import { LabelStyled, SearchSelectStyled } from './search-select.styled'
import type { SearchSelectProps } from './types'

export function SearchSelect({
  name,
  options,
  onChange,
  onKeyDown,
  placeholder,
  label,
  ...restProps
}: SearchSelectProps) {
  // https://dev.to/siddev/customise-datalist-45p0
  return (
    <>
      {label && <LabelStyled>{label}</LabelStyled>}

      <SearchSelectStyled
        autoComplete="off"
        name={name}
        list={`${name}-datalist`}
        placeholder={placeholder ?? '¿Qué tienes en tu despensa?'}
        onInput={onChange}
        onKeyDown={onKeyDown}
        {...restProps}
      />

      {/* TODO avoid showing cleanSearchString */}
      <datalist id={`${name}-datalist`}>
        {options &&
          options.map((option, key) => <option key={key} value={option} />)}
      </datalist>
    </>
  )
}

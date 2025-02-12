'use client'

import { SearchSelectStyled } from './search-select.styled'
import type { SearchSelectProps } from './types'

import { cleanSearchString } from '@/utils/commons'

export function SearchSelect(props: SearchSelectProps) {
  const { name, options, onChange, placeholder, ...restProps } = props

  // https://dev.to/siddev/customise-datalist-45p0
  return (
    <>
      <SearchSelectStyled
        autoComplete="off"
        name={name}
        list={`${name}-datalist`}
        placeholder={placeholder ?? '¿Qué tienes en tu despensa?'}
        onInput={onChange}
        {...restProps}
      />

      <datalist id={`${name}-datalist`}>
        {options &&
          options.map((ingredient, key) => (
            <option
              key={key}
              value={`${ingredient.emoji} ${cleanSearchString(ingredient.name)}`}
            />
          ))}
      </datalist>
    </>
  )
}

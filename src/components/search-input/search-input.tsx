import { type ChangeEvent } from 'react'

import { SearchInputStyled } from './search-input.styled'

type SearchInputProps = {
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

// https://dev.to/stephengade/build-a-functional-search-bar-in-nextjs-mig
export function SearchInput(props: SearchInputProps) {
  const { onChange, placeholder } = props

  return (
    <SearchInputStyled
      placeholder={placeholder ?? '¿Qué te apetece comer hoy?'}
      onChange={onChange}
    />
  )
}

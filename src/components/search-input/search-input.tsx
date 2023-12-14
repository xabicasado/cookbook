import { SearchInputStyled } from './search-input.styled'
import { type ChangeEvent } from 'react'

type SearchInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput(props: SearchInputProps) {
  const { onChange } = props

  return (
    <SearchInputStyled
      type="search"
      placeholder={'¿Qué te apetece comer hoy?'}
      onChange={onChange}
    />
  )
}

import { SearchInputStyled } from './search-input.styled'
import { type ChangeEvent } from 'react'

type SearchInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

// https://dev.to/stephengade/build-a-functional-search-bar-in-nextjs-mig
export function SearchInput(props: SearchInputProps) {
  const { onChange } = props

  return (
    <SearchInputStyled
      // type="search"
      placeholder={'¿Qué te apetece comer hoy?'}
      onChange={onChange}
    />
  )
}

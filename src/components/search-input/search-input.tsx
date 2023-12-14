import { SearchInputStyled } from './search-input.styled'

type SearchInputProps = {
  onChange?: () => void
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

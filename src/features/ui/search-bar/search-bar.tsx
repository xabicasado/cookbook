'use client'

import { SearchBarStyled } from './search-bar.styled'
import type { SearchBarProps } from './types'

// https://dev.to/stephengade/build-a-functional-search-bar-in-nextjs-mig
export function SearchBar(props: SearchBarProps) {
  const { onChange, placeholder, ...restProps } = props

  return (
    <>
      <SearchBarStyled
        placeholder={placeholder ?? '¿Qué te apetece comer hoy?'}
        onChange={onChange}
        {...restProps}
      />
      {/* <IngredientsContainerStyled></IngredientsContainerStyled> */}
    </>
  )
}

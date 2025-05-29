'use client'

import {
  // type ChangeEvent,
  createContext,
  useContext, // useState
} from 'react'

// import { SearchBar } from '@/features/ui'
// import recipesMock from '@/app/mocks/recipes.mock'

// import { type RecipeType } from '@/features/recipes/types'

// export type SearchContextType = {
//   recipeContext: RecipeType[]
// }

// export const SearchContext = createContext<SearchContextType>({

// https://stackoverflow.com/questions/76202297/live-search-bar-how-to-update-the-data-displayed-in-different-component-than-th

export const SearchContext = createContext({
  // recipeContext: [],
})

export function SearchProvider({ children }: { children: React.ReactNode }) {
  // const [searchInput, setSearchInput] = useState('')

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSearchInput(event.target.value)
  // }

  return (
    <SearchContext
      value={
        {
          // recipeContext:
          //   searchInput !== ''
          //     ? recipesMock.filter((r) => r.title.includes(searchInput))
          //     : recipesMock,
        }
      }
    >
      {/* <SearchBar onChange={() => handleChange} /> */}
      {children}
    </SearchContext>
  )
}

export const useSearchContext = () => useContext(SearchContext)

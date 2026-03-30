'use client'

import { type ChangeEvent, type KeyboardEvent, useEffect } from 'react'

import { IngredientsSection } from '@/app/features/layout'
import {
  useNewRecipeDraftDispatch,
  useRecipesSearcherDispatch,
  useRecipesSearcherState,
} from '@/app/features/recipes'
import { SearchBar, SearchSelect, Toggle } from '@/app/features/ui'
import {
  cleanSearchString,
  getEmojiFromWord,
} from '@/app/features/utils/commons'

import type { Ingredient } from '@/src/entities/models/recipe'

export function SearcherSection() {
  const { ingredients, isFilteringByIngredients, selectedIngredients } =
    useRecipesSearcherState()
  const { filterByTitle, filterByIngredients, toggleFilterType } =
    useRecipesSearcherDispatch()

  const { resetDraft } = useNewRecipeDraftDispatch()

  useEffect(() => {
    resetDraft()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const availableIngredients = ingredients
    .filter(
      (ingredient) =>
        !selectedIngredients?.some(({ name }) => name === ingredient.name)
    )
    .map(
      (ingredient) =>
        `${ingredient.emoji} ${cleanSearchString(ingredient.name)}`
    )

  const handleSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value
    filterByTitle(searchInput)
  }

  const handleSearchSelect = (event: ChangeEvent<HTMLInputElement>) => {
    // Prevent onKeyDown from automatic ingredient insertion
    if (event.nativeEvent instanceof InputEvent) return

    const searchInput = event.target.value.replace(/^[^\s]+\s/, '')

    const findedIngredient = ingredients.find(
      (ingredient) =>
        cleanSearchString(ingredient.name) === cleanSearchString(searchInput)
    )

    if (findedIngredient) {
      event.target.value = ''

      if (!selectedIngredients?.some((i) => i.name === findedIngredient.name)) {
        const newIngredientsList = [
          ...(selectedIngredients || []),
          findedIngredient,
        ]

        filterByIngredients(newIngredientsList)
      }
    }
  }

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return

    const target = event.target as HTMLInputElement
    const searchInput = target.value

    if (!searchInput) return

    const findedIngredient = ingredients.find(
      (ingredient) =>
        cleanSearchString(ingredient.name) === cleanSearchString(searchInput)
    )

    if (findedIngredient) return

    target.value = ''

    const emoji = await getEmojiFromWord(searchInput)
    const newIngredient: Ingredient = {
      name: searchInput,
      emoji,
    }

    if (!selectedIngredients?.some((i) => i.name === newIngredient.name)) {
      const newIngredientsList = [...(selectedIngredients || []), newIngredient]

      filterByIngredients(newIngredientsList)
    }
  }

  const handleDeleteOption = (ingredient: Ingredient) => {
    const newList = selectedIngredients.filter(
      (i) => i.name !== ingredient.name
    )
    filterByIngredients(newList)
  }

  return (
    <>
      {isFilteringByIngredients ? (
        <SearchSelect
          name="filterIngredients"
          onChange={handleSearchSelect}
          onKeyDown={handleKeyDown}
          options={availableIngredients}
        />
      ) : (
        <SearchBar name="filterRecipes" onChange={handleSearchBar} />
      )}

      <Toggle
        name="toggle"
        label="Busca por ingredientes"
        onChange={toggleFilterType}
      />

      {isFilteringByIngredients && !!selectedIngredients?.length && (
        <IngredientsSection
          ingredients={selectedIngredients}
          hasDetails
          justify="start"
          onClick={handleDeleteOption}
        />
      )}
    </>
  )
}

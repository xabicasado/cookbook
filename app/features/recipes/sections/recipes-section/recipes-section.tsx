'use client'

import { type ChangeEvent, useState } from 'react'

import { compareByName } from '../../recipe/recipe.utils'

import { CardSection, IngredientsSection } from '@/app/features/layout'
import {
  useNewRecipeDraftContext,
  useRecipesContext,
} from '@/app/features/recipes'
import { Button, SearchBar, SearchSelect, Toggle } from '@/app/features/ui'
import {
  cleanSearchString,
  setTitleFormat,
  slugify,
} from '@/app/features/utils/commons'
import type { IngredientType } from '@/app/mocks/ingredients.mock'

export function RecipesSection() {
  const {
    filteredRecipes,
    searchRecipesByName,
    searchRecipesByIngredients,
    resetSearch,
  } = useRecipesContext()
  const { newRecipeDrafts, setNewRecipeDrafts } = useNewRecipeDraftContext()
  const [isFilteringIngredients, setIsFilteringIngredients] =
    useState<boolean>(false)

  const getIngredientsMock = () => {
    const uniqueIngredients: IngredientType[] = []
    const ingredientMap = new Map<string, IngredientType>()

    filteredRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        const ingredientKey = ingredient.name

        if (!ingredient.isCommon && !ingredientMap.has(ingredientKey)) {
          uniqueIngredients.push(ingredient)
          ingredientMap.set(ingredientKey, ingredient)
        }
      })
    })

    uniqueIngredients.sort(compareByName)

    return uniqueIngredients
  }

  const ingredientsMock = getIngredientsMock()

  const handleFilterChange = () => {
    setIsFilteringIngredients(!isFilteringIngredients)
    resetSearch()
    setNewRecipeDrafts({ ...newRecipeDrafts, title: '', ingredients: [] })
  }

  const handleOnTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value

    const newRecipeTitle = setTitleFormat(searchInput)
    setNewRecipeDrafts({
      ...newRecipeDrafts,
      title: newRecipeTitle,
      slug: slugify(newRecipeTitle),
    })

    searchRecipesByName(searchInput)
  }

  const handleOnIngredientsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value.replace(/^[^\s]+\s/, '')

    if (event.nativeEvent instanceof InputEvent) return

    const findedIngredient = ingredientsMock.find(
      (ingredient) =>
        cleanSearchString(ingredient.name) === cleanSearchString(searchInput)
    )

    if (findedIngredient) {
      event.target.value = ''

      if (!newRecipeDrafts?.ingredients?.includes(findedIngredient)) {
        const ingredientsList = [
          ...(newRecipeDrafts?.ingredients || []),
          findedIngredient,
        ]

        setNewRecipeDrafts({
          ...newRecipeDrafts,
          ingredients: ingredientsList,
        })

        searchRecipesByIngredients(ingredientsList)
      }
    }
  }

  const handleDeleteOption = (ingredient: IngredientType) => {
    const ingredientsList = newRecipeDrafts?.ingredients?.filter(
      (newRecipeDraftsIngredient) => ingredient !== newRecipeDraftsIngredient
    )

    setNewRecipeDrafts({
      ...newRecipeDrafts,
      ingredients: ingredientsList,
    })

    searchRecipesByIngredients(ingredientsList ?? [])
  }

  return (
    <>
      {isFilteringIngredients ? (
        <SearchSelect
          onChange={handleOnIngredientsChange}
          options={ingredientsMock
            .filter(
              (ingredient) =>
                !newRecipeDrafts?.ingredients?.some(
                  (draftIngredient) => draftIngredient.name === ingredient.name
                )
            )
            .map(
              (ingredient) =>
                `${ingredient.emoji} ${cleanSearchString(ingredient.name)}`
            )}
          name="filterIngredients"
        />
      ) : (
        <SearchBar onChange={handleOnTitleChange} name="filterRecipes" />
      )}

      <Toggle
        name="toggle"
        label="Buscar por ingredientes"
        onChange={handleFilterChange}
      />

      {isFilteringIngredients && !!newRecipeDrafts?.ingredients?.length && (
        <IngredientsSection
          ingredients={newRecipeDrafts?.ingredients}
          hasDetails
          justify="start"
          onClick={handleDeleteOption}
        />
      )}

      {filteredRecipes?.length === 0 ? (
        <Button label="Añadir nueva receta" primary fullWidth disabled />
      ) : (
        <CardSection cards={filteredRecipes} />
      )}
    </>
  )
}

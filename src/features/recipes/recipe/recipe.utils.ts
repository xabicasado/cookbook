import { DEFAULT_SERVINGS } from './recipe.constants'

import {
  type IngredientType,
  type RecipeType,
  type StepType,
  type TipType,
} from '@/features/recipes/types'
import { decimalToFraction } from '@/utils/commons'

export const displayQuantity = (
  quantity: number,
  currentServings: number,
  servings: number
): string =>
  decimalToFraction(
    Math.round(((quantity * currentServings) / servings) * 100) / 100
  )

const generateIngredientsText = (
  ingredients: IngredientType[],
  currentServings: number,
  servings: number
) => {
  const ingredientsText = ingredients.map((ingredient) =>
    `${ingredient?.emoji ?? ''}${ingredient?.emoji !== '' ? ' ' : ''}${
      ingredient?.quantity != null
        ? displayQuantity(+ingredient?.quantity, currentServings, servings)
        : ''
    }${ingredient?.quantity != null ? ' ' : ''}${
      ingredient?.measurement ?? ''
    }${ingredient?.measurement != null ? ' ' : ''}${ingredient?.name}${
      ingredient?.details != null ? ' ' : ''
    }${ingredient?.details ?? ''}
`.trim().concat(`
`)
  )

  return ingredientsText.join('')
}

const stepEmojis = [
  '0️⃣',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '9️⃣',
  '🔟',
]

const generatestepsText = (steps: StepType[]) => {
  const stepsText = steps.map(
    (step, index) => `${
      index < 10
        ? stepEmojis[index + 1]
        : stepEmojis[+index.toString()[0]].concat(
            stepEmojis[+index.toString()[1] + 1]
          )
    } ${step?.description}
`
  )

  return stepsText.join('')
}

const generateTipsText = (tips: TipType[]) => {
  const tipsText = tips?.map(
    (tip) => `💡 ${tip}
`
  )

  return tipsText.join('')
}

export const generateRecipeText = (
  recipe: RecipeType,
  currentServings: number
): string => {
  const { title, ingredients, steps, tips } = recipe

  const ingredientsText = generateIngredientsText(
    ingredients,
    currentServings,
    recipe.servings ?? DEFAULT_SERVINGS
  )
  const stepsText = steps.length > 0 ? generatestepsText(steps) : ''

  const tipsText = tips != null ? generateTipsText(tips) : ''

  const recipeText = `*${title.toUpperCase()}*
${ingredientsText}
${steps.length > 0 ? '_Elaboración_' : ''}
${steps.length > 0 ? stepsText : ''}
${tips != null ? tipsText : ''}`.trim()

  return recipeText
}

export const compareByTitle = (
  recipeA: RecipeType,
  recipeB: RecipeType
): number => {
  if (recipeA.title < recipeB.title) return -1
  if (recipeA.title > recipeB.title) return 1
  return 0
}

export const compareByName = (
  ingredientA: IngredientType,
  ingredientB: IngredientType
): number => {
  if (ingredientA.name < ingredientB.name) return -1
  if (ingredientA.name > ingredientB.name) return 1
  return 0
}

import { DEFAULT_SERVINGS } from './recipe.constants'

import { compareByKey } from '@/app/features/utils/commons'

import {
  type Ingredient,
  IngredientQuantity,
  type Ingredients,
  type Recipe,
  type RecipeInsert,
  type Steps,
  type Tips,
} from '@/src/entities/models/recipe'

const generateIngredientsText = (
  ingredients: Ingredients,
  currentServings: number,
  servings: number
) => {
  const ingredientsText = ingredients.map((ingredient) =>
    `${ingredient?.emoji ?? ''}${ingredient?.emoji !== '' ? ' ' : ''}${
      ingredient?.quantity != null
        ? IngredientQuantity.display(
            +ingredient?.quantity,
            currentServings,
            servings,
            false
          )
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

const generatestepsText = (steps: Steps) => {
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

const generateTipsText = (tips: Tips) => {
  const tipsText = tips?.map(
    (tip) => `💡 ${tip}
`
  )

  return tipsText.join('')
}

export const generateRecipeText = (
  recipe: RecipeInsert,
  currentServings: number
): string => {
  const { title, servings, ingredients, steps, tips } = recipe

  const ingredientsText = generateIngredientsText(
    ingredients,
    currentServings,
    servings ?? DEFAULT_SERVINGS
  )
  const stepsText = steps?.length ? generatestepsText(steps) : ''

  const tipsText = tips != null ? generateTipsText(tips) : ''

  const recipeText = `*${title.toUpperCase()}*
${ingredientsText}
${steps?.length ? '_Elaboración_' : ''}
${steps?.length ? stepsText : ''}
${tips != null ? tipsText : ''}`.trim()

  return recipeText
}

export const compareByTitle = compareByKey<Recipe>('title')
export const compareByName = compareByKey<Ingredient>('name')
export const compareByQuantity = compareByKey<Ingredient>('quantity')

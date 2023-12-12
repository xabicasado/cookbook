import {
  type RecipeType,
  type IngredientType,
  type StepType,
  type TipType,
} from '@/types/recipe.types'

const generateIngredientsText = (ingredients: IngredientType[]) => {
  const ingredientsText = ingredients.map(
    (ingredient) => `${ingredient?.emoji} ${ingredient?.quantity ?? ''} ${
      ingredient?.measurement ?? ''
    } ${ingredient?.name} ${ingredient?.details ?? ''}
`
  )

  return ingredientsText.join('')
}

const generatestepsText = (steps: StepType[]) => {
  const stepsText = steps.map(
    (step, index) => `${index + 1}. ${step?.description}
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

export const generateRecipeText = (recipe: RecipeType) => {
  const { title, ingredients, steps, tips } = recipe

  const ingredientsText = generateIngredientsText(ingredients)
  const stepsText = generatestepsText(steps)

  const tipsText = tips != null ? generateTipsText(tips) : ''

  const recipeText = `*${title.toUpperCase()}*
${ingredientsText}
_Preparación_
${stepsText}
${tips != null ? tipsText : ''}`

  return recipeText
}

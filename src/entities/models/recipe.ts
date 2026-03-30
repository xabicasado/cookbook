import { z } from 'zod'

export const recipeTitleSchema = z.string()

const normalizeTitle = (title: RecipeTitle): string =>
  title
    .trim()
    .toLowerCase()
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents

const slugifyTitle = (title: RecipeTitle): string =>
  normalizeTitle(title)
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-') // separator

export const RecipeTitle = {
  recipeTitleSchema,
  normalize: normalizeTitle,
  slugify: slugifyTitle,
}

export type RecipeTitle = z.infer<typeof recipeTitleSchema>

export const stepSchema = z.object({
  description: z.string(),
  duration: z.number().nullish(),
})
export type Step = z.infer<typeof stepSchema>

export const stepsSchema = z.array(stepSchema)
export type Steps = z.infer<typeof stepsSchema>

export const tipSchema = z.string().nullish()

export const tipsSchema = z.array(tipSchema)
export type Tips = z.infer<typeof tipsSchema>

export const ingredientQuantitySchema = z.number().nullish()

const gcd = (a: number, b: number): number =>
  b < 0.0000001 ? a : gcd(b, Math.floor(a % b))

const decimalToFraction = (n: number): string => {
  const MAX_DENOMINATOR: number = 8

  const tol = 1e-7
  if (Math.abs(Math.round(n) - n) < tol) return Math.round(n).toString()

  let denominator: number = MAX_DENOMINATOR
  let numerator: number = Math.round(n * denominator)

  const divisor = gcd(numerator, denominator)

  numerator /= divisor
  denominator /= divisor

  if (denominator === 1 || numerator === 0) return numerator.toString()

  const wholePart = Math.floor(numerator / denominator)
  const fracPart = numerator % denominator

  const wholeStr = wholePart ? `${wholePart}` : ''
  const fracStr = fracPart ? `${fracPart}/${denominator}` : ''
  const concatStr = wholePart && fracPart ? ' y ' : ''

  return `${wholeStr}${concatStr}${fracStr}`
}

const displayQuantity = (
  quantity: number,
  currentServings: number,
  servings: number,
  isShowingDecimals: boolean
): string => {
  const currentQuantity =
    Math.round(((quantity * currentServings) / servings) * 100) / 100

  if (isShowingDecimals) return currentQuantity.toString()

  return decimalToFraction(currentQuantity)
}

export const IngredientQuantity = {
  ingredientQuantitySchema,
  display: displayQuantity,
}

export const ingredientSchema = z.object({
  emoji: z.string(),
  quantity: ingredientQuantitySchema,
  measurement: z.string().nullish(),
  name: z.string(),
  alternative: z.string().nullish(),
  details: z.string().nullish(),
  recommendation: z.string().nullish(),
  isCommon: z.boolean().default(false).nullish(),
})
export type Ingredient = z.infer<typeof ingredientSchema>

export const ingredientsSchema = z.array(ingredientSchema)
export type Ingredients = z.infer<typeof ingredientsSchema>

export const recipeSchema = z.object({
  id: z.string(),
  created_at: z.string().nullish(),
  title: recipeTitleSchema,
  slug: z.string(),
  servings: z.number().nullish(),
  source: z.string().nullish(),
  ingredients: ingredientsSchema,
  steps: stepsSchema.nullish(),
  tips: tipsSchema.nullish(),
})
export type Recipe = z.infer<typeof recipeSchema>

export const recipesSchema = z.array(
  z.object({
    title: z.string(),
    slug: z.string(),
    ingredients: ingredientsSchema,
  })
)
export type Recipes = z.infer<typeof recipesSchema>

export const insertRecipeSchema = recipeSchema.pick({
  title: true,
  slug: true,
  servings: true,
  source: true,
  ingredients: true,
  steps: true,
  tips: true,
})

export type RecipeInsert = z.infer<typeof insertRecipeSchema>

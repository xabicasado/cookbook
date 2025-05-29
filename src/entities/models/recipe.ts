import { z } from 'zod'

export const stepSchema = z.object({
  description: z.string(),
  duration: z.number().nullish(),
})

export const stepsSchema = z.array(stepSchema)
export type Steps = z.infer<typeof stepsSchema>

export const tipSchema = z.string().nullish()

export const tipsSchema = z.array(tipSchema)
export type Tips = z.infer<typeof tipsSchema>

export const ingredientSchema = z.object({
  emoji: z.string(),
  quantity: z.number().nullish(),
  measurement: z.string().nullish(),
  name: z.string(),
  alternative: z.string().nullish(),
  details: z.string().nullish(),
  recommendation: z.string().nullish(),
  isCommon: z.boolean().default(false),
})
export type Ingredient = z.infer<typeof ingredientSchema>

export const ingredientsSchema = z.array(ingredientSchema)
export type Ingredients = z.infer<typeof ingredientsSchema>

export const recipeSchema = z.object({
  id: z.string(),
  created_at: z.string().nullish(),
  title: z.string(),
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

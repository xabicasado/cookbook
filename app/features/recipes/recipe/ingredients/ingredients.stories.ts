import { Ingredients } from './ingredients'

import type { Meta, StoryObj } from '@storybook/react'

import recipesMock from '@/app/mocks/recipes.mock'

const meta = {
  title: 'Recipe/Ingredients',
  component: Ingredients,
} satisfies Meta<typeof Ingredients>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    servings: 2,
    currentServings: 1,
    ingredients: recipesMock[0].ingredients,
  },
}

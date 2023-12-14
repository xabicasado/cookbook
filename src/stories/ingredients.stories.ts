import type { Meta, StoryObj } from '@storybook/react'

import { Ingredients } from '../components/recipe/ingredients'
import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Recipe/Ingredients',
  component: Ingredients,
  tags: ['autodocs'],
} satisfies Meta<typeof Ingredients>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    ingredients: recipesMock[0].ingredients,
  },
}

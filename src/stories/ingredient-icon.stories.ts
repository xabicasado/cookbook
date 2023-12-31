import type { Meta, StoryObj } from '@storybook/react'

import { IngredientIcon } from '../components/ingredient-icon'

import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Components/IngredientIcon',
  component: IngredientIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IngredientIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    ingredient: recipesMock[1].ingredients[0].emoji,
  },
}

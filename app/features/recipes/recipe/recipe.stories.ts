import type { Meta, StoryObj } from '@storybook/react'

import { Recipe } from '@/app/features/recipes'
import recipesMock from '@/app/mocks/recipes.mock'

const meta: Meta<typeof Recipe> = {
  title: 'Recipe/Recipe',
  component: Recipe,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    ...recipesMock[1],
  },
}

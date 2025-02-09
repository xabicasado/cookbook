import type { Meta, StoryObj } from '@storybook/react'

import { Recipe } from '@/features/recipes'
import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Components/Recipe',
  component: Recipe,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Recipe>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    ...recipesMock[1],
  },
}

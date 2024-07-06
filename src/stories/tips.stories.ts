import type { Meta, StoryObj } from '@storybook/react'

import { Tips } from '../features/recipes/recipe/tips'

import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Recipe/Tips',
  component: Tips,
  tags: ['autodocs'],
} satisfies Meta<typeof Tips>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    tips: recipesMock[1]?.tips ?? [],
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../components/card'
import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    title: recipesMock[0].title,
    href: recipesMock[0].slug,
    ingredients: recipesMock[0].ingredients.map(
      (ingredient) => ingredient?.emoji
    ),
  },
}

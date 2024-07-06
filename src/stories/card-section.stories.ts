import type { Meta, StoryObj } from '@storybook/react'

import { CardSection } from '@/features/ui'
import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Components/CardSection',
  component: CardSection,
  tags: ['autodocs'],
} satisfies Meta<typeof CardSection>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    recipes: recipesMock,
  },
}

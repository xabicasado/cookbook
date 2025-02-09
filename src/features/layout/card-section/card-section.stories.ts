import type { Meta, StoryObj } from '@storybook/react'

import { CardSection } from '@/features/layout'
import recipesMock from '@/mocks/recipes.mock'

const meta: Meta<typeof CardSection> = {
  title: 'Components/CardSection',
  component: CardSection,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    cards: recipesMock,
  },
}

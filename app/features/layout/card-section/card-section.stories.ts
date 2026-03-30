import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CardSection } from '@/app/features/layout'
import recipesMock from '@/app/mocks/recipes.mock'

const meta: Meta<typeof CardSection> = {
  title: 'Layout/CardSection',
  component: CardSection,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    cards: recipesMock,
  },
}

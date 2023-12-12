import type { Meta, StoryObj } from '@storybook/react'

import { Steps } from '../components/recipe/steps'
import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Recipe/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Steps>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    steps: recipesMock[0].steps,
  },
}

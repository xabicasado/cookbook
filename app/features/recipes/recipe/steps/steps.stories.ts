import { Steps } from '.'

import type { Meta, StoryObj } from '@storybook/react'

import recipesMock from '@/app/mocks/recipes.mock'

const meta = {
  title: 'Recipe/Steps',
  component: Steps,
} satisfies Meta<typeof Steps>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    steps: recipesMock[0].steps,
  },
}

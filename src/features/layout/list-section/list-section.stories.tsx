import type { Meta, StoryObj } from '@storybook/react'

import { ListSection } from '@/features/layout'
import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Components/ListSection',
  component: ListSection,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ListSection>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    children: recipesMock[0].ingredients.map((ingredient, index) => (
      <li key={index}>
        {ingredient?.emoji ?? ''} {ingredient?.name}
      </li>
    )),
  },
}

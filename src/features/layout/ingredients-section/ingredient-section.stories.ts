import type { Meta, StoryObj } from '@storybook/react'

import { IngredientsSection } from '@/features/layout'
import ingredientsMock from '@/mocks/ingredients.mock'

const meta = {
  title: 'Layout/IngredientsSection',
  component: IngredientsSection,
} satisfies Meta<typeof IngredientsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    ingredients: ingredientsMock,
  },
}

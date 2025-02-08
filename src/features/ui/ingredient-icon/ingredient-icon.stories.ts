import type { Meta, StoryObj } from '@storybook/react'

import { IngredientIcon } from '@/features/ui'
import recipesMock from '@/mocks/recipes.mock'

const meta: Meta<typeof IngredientIcon> = {
  title: 'Components/IngredientIcon',
  component: IngredientIcon,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    ingredient: recipesMock[0].ingredients[0],
  },
}

export const WithVisibleName: Story = {
  args: {
    ingredient: recipesMock[0].ingredients[0],
    hasVisibleName: true,
    isClosable: true,
  },
}

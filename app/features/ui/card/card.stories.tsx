import type { Meta, StoryObj } from '@storybook/react'

import { IngredientsSection } from '@/app/features/layout'
import { Card } from '@/app/features/ui'
import recipesMock from '@/app/mocks/recipes.mock'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof meta>

export const RecipeCard: Story = {
  args: {
    title: recipesMock[0].title,
    href: recipesMock[0].slug,
    children: <IngredientsSection ingredients={recipesMock[0].ingredients} />,
  },
}

export const IngredientCard: Story = {
  args: {
    subtitle: 'Plátano',
    details: '2 bolsas',
    justify: 'start',
    children: (
      <IngredientsSection
        justify="start"
        ingredients={[
          {
            emoji: '🍌',
            name: 'plátano',
          },
        ]}
      />
    ),
  },
}

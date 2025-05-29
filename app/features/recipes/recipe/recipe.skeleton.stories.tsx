import { RecipeSkeleton } from './recipe.skeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RecipeSkeleton> = {
  title: 'Skeletons/RecipeSkeleton',
  component: RecipeSkeleton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {}

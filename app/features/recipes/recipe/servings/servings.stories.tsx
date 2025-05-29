import { Servings } from './servings'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Servings> = {
  title: 'Recipe/Servings',
  component: Servings,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {}

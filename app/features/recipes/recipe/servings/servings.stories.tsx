import { Servings } from './servings'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Servings> = {
  title: 'Recipe/Servings',
  component: Servings,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {}

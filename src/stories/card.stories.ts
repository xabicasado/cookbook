import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../components/card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    title: 'Batido de aguacate y plátano con almendras',
    href: 'card-slug',
    ingredients: ['🥑', '🍌', '🍏', '🥛'],
  },
}

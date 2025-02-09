import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/features/ui'

const meta = {
  title: 'Components/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: { title: 'Cookbook' },
}

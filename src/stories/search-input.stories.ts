import type { Meta, StoryObj } from '@storybook/react'

import { SearchBar } from '@/features/ui'

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

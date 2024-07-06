import type { Meta, StoryObj } from '@storybook/react'

import { Menu } from '../features/ui/menu'

import { anonymousFunction } from '@/utils/commons'

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: { isOpen: true, setIsOpen: anonymousFunction, menuItems: [] },
}

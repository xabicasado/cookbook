import type { Meta, StoryObj } from '@storybook/react'
import { anonymousFunction } from '@/utils/commons'

import { Menu } from '../components/menu'

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: { isOpen: true, setIsOpen: (isOpen: boolean) => anonymousFunction },
}

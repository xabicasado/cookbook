import type { Meta, StoryObj } from '@storybook/react'
import { anonymousFunction } from '@/utils/commons'

import { Notification } from '../components/notification'

const meta = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    description: '¡Receta guardada!',
    isOpen: true,
    setIsOpen: (isOpen: boolean) => anonymousFunction,
  },
}

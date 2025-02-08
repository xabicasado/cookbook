import type { Meta, StoryObj } from '@storybook/react'

import { Notification } from '@/features/ui'
import { anonymousFunction } from '@/utils/commons'

const meta = {
  title: 'Components/Notification',
  component: Notification,
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    description: '¡Receta guardada!',
    isOpen: true,
    setIsOpen: () => anonymousFunction,
  },
}

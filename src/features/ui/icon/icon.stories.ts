import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@/features/ui'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Icon } from '@/app/features/ui'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

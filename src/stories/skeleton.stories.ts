import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '../components/skeleton'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

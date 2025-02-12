import type { Meta, StoryObj } from '@storybook/react'

import { CardSkeleton } from '@/features/ui'

const meta: Meta<typeof CardSkeleton> = {
  title: 'Skeleton/CardSkeleton',
  component: CardSkeleton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {}

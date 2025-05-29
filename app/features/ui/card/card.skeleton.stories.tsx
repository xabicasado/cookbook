import type { Meta, StoryObj } from '@storybook/react'

import { CardSkeleton } from '@/app/features/ui'

const meta: Meta<typeof CardSkeleton> = {
  title: 'Skeletons/CardSkeleton',
  component: CardSkeleton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {}

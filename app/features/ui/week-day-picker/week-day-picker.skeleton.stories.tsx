import type { Meta, StoryObj } from '@storybook/react'

import { WeekDayPickerSkeleton } from '@/app/features/ui'

const meta: Meta<typeof WeekDayPickerSkeleton> = {
  title: 'Skeletons/WeekDayPickerSkeleton',
  component: WeekDayPickerSkeleton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {}

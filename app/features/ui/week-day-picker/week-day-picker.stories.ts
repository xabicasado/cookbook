import type { Meta, StoryObj } from '@storybook/react'

import { WeekDayPicker } from '@/app/features/ui'

const meta: Meta<typeof WeekDayPicker> = {
  title: 'Components/WeekDayPicker',
  component: WeekDayPicker,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

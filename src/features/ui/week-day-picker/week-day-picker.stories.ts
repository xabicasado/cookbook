import type { Meta, StoryObj } from '@storybook/react'

import { WeekDayPicker } from '@/features/ui'

const meta: Meta<typeof WeekDayPicker> = {
  title: 'Components/WeekDayPicker',
  component: WeekDayPicker,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

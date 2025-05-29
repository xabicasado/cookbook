import { NumberRange } from './number-range'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NumberRange> = {
  title: 'Components/NumberRange',
  component: NumberRange,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    initialNumber: 1,
  },
}

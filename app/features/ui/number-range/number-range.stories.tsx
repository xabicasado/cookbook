import { NumberRange } from './number-range'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof NumberRange> = {
  title: 'Components/NumberRange',
  component: NumberRange,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    number: 1,
  },
}

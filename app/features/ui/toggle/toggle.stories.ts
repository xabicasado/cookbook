import { Toggle } from '.'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    name: 'toggle',
  },
}

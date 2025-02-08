import { SearchBar } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

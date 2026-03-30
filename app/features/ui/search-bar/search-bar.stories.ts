import { SearchBar } from '.'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    name: 'filterRecipes',
  },
}

import { ChefButton } from './chef-button'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof ChefButton> = {
  title: 'Components/ChefButton',
  component: ChefButton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    label: '¡Prepárame algo!',
  },
}

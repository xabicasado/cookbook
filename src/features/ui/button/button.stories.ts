import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/features/ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    // size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    // size: 'small',
    label: 'Button',
  },
}

export const Full: Story = {
  args: {
    // size: 'full',
    fullWidth: true,
    label: 'Button',
  },
}

import { ButtonSectionSkeleton } from './button-section.skeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonSectionSkeleton> = {
  title: 'Skeletons/ButtonSectionSkeleton',
  component: ButtonSectionSkeleton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {}

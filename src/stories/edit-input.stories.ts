import type { Meta, StoryObj } from '@storybook/react'

import { EditInput } from '@/features/ui'

const meta = {
  title: 'Components/EditInput',
  component: EditInput,
  tags: ['autodocs'],
} satisfies Meta<typeof EditInput>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: { name: 'ingredientes', label: 'Ingredientes' },
}

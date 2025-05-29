import type { Meta, StoryObj } from '@storybook/react'

import { EditInput } from '@/app/features/ui'

const meta: Meta<typeof EditInput> = {
  title: 'Components/EditInput',
  component: EditInput,
}

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: { name: 'ingredientes', label: 'Ingredientes' },
}

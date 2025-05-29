import { DraggableList } from './draggable-list'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DraggableList> = {
  title: 'Components/DraggableList',
  component: DraggableList,
}

export default meta

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: { listItems: ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'] },
}

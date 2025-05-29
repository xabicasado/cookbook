import theme from './theme'

import type { Meta, StoryObj } from '@storybook/react'

const SpacingTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Size</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(theme.spacing).map(([size, value]) => (
          <tr key={size}>
            <td>{size}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const meta: Meta<typeof SpacingTable> = {
  title: 'Theme/Spacing',
  component: SpacingTable,
}

export default meta
export type Story = StoryObj<typeof meta>

export const Spacing: Story = {
  render: () => <SpacingTable />,
}

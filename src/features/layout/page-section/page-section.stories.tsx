import type { Meta, StoryObj } from '@storybook/react'

import { ListSection, PageSection } from '@/features/layout'
import recipesMock from '@/mocks/recipes.mock'

const meta = {
  title: 'Layout/PageSection',
  component: PageSection,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageSection>

export default meta
type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    title: 'PageSection Title',
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        incidunt facere rerum labore adipisci nemo, tempora ad natus ipsa sint,
        quod provident excepturi nobis eum autem voluptatem, quae eveniet
        quibusdam
        <ListSection>
          {recipesMock[0].ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient?.emoji ?? ''} {ingredient?.name}
            </li>
          ))}
        </ListSection>
      </>
    ),
  },
}

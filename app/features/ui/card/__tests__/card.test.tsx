import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { IngredientsSection } from '@/app/features/layout'
import { Card } from '@/app/features/ui'
import recipesMock from '@/app/mocks/recipes.mock'

describe('<Card />', () => {
  const recipeMock = recipesMock[0]

  const args = {
    title: recipeMock?.title, // 'Almejas a la marinera'
    href: `/${recipeMock?.slug}`, // '/almejas-a-la-marinera'
    children: (
      <IngredientsSection limit={8} ingredients={recipeMock?.ingredients} />
    ), // ['🦪', '🧅', ... ] length=9
  }

  it('displays a title, a ingredients list and loads a link', () => {
    // GIVEN
    render(<Card {...args} />)

    // WHEN

    // THEN
    const cardTitle = screen.getByText('Almejas a la marinera')
    const link = screen.getByRole('link')
    const cardFirstIngredient = screen.getByText('🦪')
    // TODO Check from 1 to 8 ?
    const cardLastIgredient = screen.getByText('🌿') // 8 ingredients only

    expect(cardTitle).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/almejas-a-la-marinera')
    expect(cardFirstIngredient).toBeInTheDocument()
    expect(cardLastIgredient).toBeInTheDocument()
  })

  // TODO Delete limit and test on CardSection
  it('limits the maximum number of ingredients displayed', () => {
    // GIVEN
    // render(<Card {...args} ingredients={Array(9).fill('🧂')} />)
    // const ingredientIcons = screen.getAllByText('🧂')
    // expect(ingredientIcons.length).toBe(8)
    // const { container } =
    render(<Card {...args} />)

    // WHEN

    // THEN
    // TODO Get all IngredientIcon styled-components
    // const ingredientIcons = container.querySelectorAll('span')

    // const ingredientIcons = screen.getAllByRole('img', {
    //   name: /Ingrediente/,
    // })
    const ingredientIcons = screen.getAllByRole('img')

    // const EigthIgredient = screen.queryByText(args.ingredients[7]) // '🌿'
    // const NinthIgredient = screen.queryByText(args.ingredients[8]) // '🧂'
    const EigthIgredient = screen.queryByText(recipeMock?.ingredients[7].emoji) // '🌿'
    const NinthIgredient = screen.queryByText(recipeMock?.ingredients[8].emoji) // '🧂'

    // expect(ingredientIcons).toHaveLength(CARD_INGREDIENTS_ICONS_LIMIT)
    // expect(args.ingredients).toHaveLength(9)
    // expect(ingredientIcons).toHaveLength(8)
    // expect(args.ingredients.length).toBeGreaterThan(ingredientIcons.length)

    expect(ingredientIcons.length).toBeLessThan(recipeMock?.ingredients.length)
    expect(EigthIgredient).toBeInTheDocument()
    expect(NinthIgredient).not.toBeInTheDocument()
  })

  it('navigates to the link when clicked', async () => {
    // GIVEN
    const pushMock = vi.fn()
    const prefetchMock = vi.fn()

    const mockRouter = {
      push: pushMock,
      prefetch: prefetchMock,
    }

    render(
      <RouterContext value={mockRouter}>
        <Card {...args} />
      </RouterContext>
    )

    // WHEN
    const link = screen.getByRole('link')
    await userEvent.click(link)

    // THEN
    expect(link).toHaveAttribute('href', '/almejas-a-la-marinera')
    expect(pushMock).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalledWith(
      '/almejas-a-la-marinera',
      expect.objectContaining({
        scroll: true,
      })
    )
  })
})

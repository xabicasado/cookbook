import { render, screen } from '@testing-library/react'
import { Card } from '@/components/card'
import recipesMock from '@/mocks/recipes.mock'

describe('<Card />', () => {
  const args = {
    title: 'Title',
    href: '/recipes',
    ingredients: recipesMock[0].ingredients.map(
      (ingredient) => ingredient.emoji
    ),
  }
  it('should be defined', () => {
    // GIVEN
    render(<Card {...args} />)

    // WHEN
    const card = screen.getByText('Title')

    // THEN
    expect(card).toBeInTheDocument()
  })
  it('should have title', () => {
    // GIVEN
    render(<Card {...args} />)

    // WHEN
    const card = screen.getByText('Title')

    // THEN
    expect(card).toBeInTheDocument()
  })

  it('should have href', () => {
    // GIVEN
    render(<Card {...args} />)

    // WHEN
    const card = screen.getByText('Title')

    // THEN
    expect(card).toHaveAttribute('href', '/recipes')
  })
})

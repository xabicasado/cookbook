import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchBar } from '@/app/features/ui'

describe('<SearchBar />', () => {
  const handleChange = vi.fn()

  const args = {
    name: 'searchBar',
    onChange: handleChange,
    placeholder: 'I am a dummy placeholder!',
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders the search bar with a placeholder', () => {
    // GIVEN
    render(<SearchBar {...args} />)

    // WHEN

    // THEN
    const searchBar = screen.queryByPlaceholderText('I am a dummy placeholder!')
    const searchBarPlaceholder = screen
      .getByRole('searchbox')
      .getAttribute('placeholder')

    expect(searchBar).toBeInTheDocument()
    expect(searchBar).toHaveAttribute('type', 'search')
    expect(searchBarPlaceholder).toBe('I am a dummy placeholder!')
  })

  it('executes a search function when something is typed', async () => {
    // GIVEN
    render(<SearchBar {...args} />)

    // WHEN
    const searchBar = screen.getByRole('searchbox')
    await userEvent.type(searchBar, 'I want to make a quick search')

    // THEN
    expect(handleChange).toHaveBeenCalled()
  })

  it('disables if specified', () => {
    // GIVEN
    render(<SearchBar {...args} disabled />)

    // WHEN

    // THEN
    const searchBar = screen.getByRole('searchbox')

    expect(searchBar).toBeDisabled()
    // expect(button).toHaveStyle({ 'background-color': '#e3e3e3' })
    // expect(button).toHaveStyle({ color: '#808080' })
  })
})

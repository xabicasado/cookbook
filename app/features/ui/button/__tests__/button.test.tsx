import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '@/app/features/ui'

describe('<Button />', () => {
  const handleClick = vi.fn()

  const args = {
    label: 'Button label!',
    onClick: handleClick,
    // primary: true,
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders a button', () => {
    // GIVEN
    render(<Button {...args} />)

    // WHEN

    // THEN
    // const button = screen.getByText('Button label!')
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toBeInstanceOf(HTMLButtonElement) // TODO Remove as its redundant?
    expect(button).toHaveTextContent('Button label!')
  })

  it('executes a function when clicked', async () => {
    // GIVEN
    render(<Button {...args} />)

    // WHEN
    // const button = screen.getByText('Button label!')
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // THEN
    expect(handleClick).toHaveBeenCalled()
  })

  it('disables if specified', () => {
    // GIVEN
    render(<Button {...args} disabled />)

    // WHEN

    // THEN
    // const button = screen.getByText('Button label!')
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
    // expect(button).toHaveStyle({ 'background-color': '#e3e3e3' })
    // expect(button).toHaveStyle({ color: '#808080' })
  })

  it('does not trigger a function when clicked if it is disabled', async () => {
    // GIVEN
    // const handleClick = vi.fn()
    // render(<Button {...args} disabled onClick={handleClick} />)
    render(<Button {...args} disabled />)

    // WHEN
    // const button = screen.getByText('Button label!')
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // THEN
    expect(button).toBeDisabled()
    expect(handleClick).not.toHaveBeenCalled()
  })
})

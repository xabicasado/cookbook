import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '@/features/ui'

describe('<Button />', () => {
  // let component
  const handleClick = jest.fn()

  const args = {
    label: 'Button label!',
    onClick: handleClick,
    // primary: true,
  }

  // beforeEach(() => {
  //   component = render(<Button {...args} />)
  // })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a button', () => {
    // GIVEN
    render(<Button {...args} />)

    // WHEN

    // THEN
    // const button = screen.getByText('Button label!')
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    // expect(component).toBeDefined()
    expect(button).toBeInstanceOf(HTMLButtonElement) // TODO Remove as its redundant?
    expect(button).toHaveTextContent('Button label!')
  })

  it('should execute a function onClick', async () => {
    // GIVEN
    render(<Button {...args} />)

    // WHEN
    // const button = screen.getByText('Button label!')
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // THEN
    expect(handleClick).toHaveBeenCalled()
  })

  it('should be disabled if specified', () => {
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

  it('shouldnt trigger the onClick event if its disabled', async () => {
    // GIVEN
    // const handleClick = jest.fn()
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

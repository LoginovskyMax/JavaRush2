import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

jest.mock('../../hooks/useAuth', () => ({
    useAuth: () => [jest.fn()]
}));

const mockChangeTheme = jest.fn();

describe('тесты для компонента Header', () => {
  beforeEach(() => {
    render(<Header changeTheme={mockChangeTheme} />)
  })

  it('Наличие дива', () => {
    const div = screen.getByTestId('header')
 
    expect(div).toBeInTheDocument()
  })

  it('Наличие дива поиск по тексту', () => {
    const div = screen.getByText('Заголовок сайта')
 
    expect(div).toBeInTheDocument()
  })

   it('Показ модалки при клике на кнопку', () => {
    const btn = screen.getByTestId('toggle-btn')

    fireEvent.click(btn)

    const modal = screen.getByTestId('header-modal')
 
    expect(modal).toBeVisible()
  })

    it('Вызов функции при клике на кнопку смены темы', () => {
    const btn = screen.getByTestId('theme-btn')

    fireEvent.click(btn)
    fireEvent.click(btn)
 
    expect(mockChangeTheme).toHaveBeenCalled()
     expect(mockChangeTheme).toHaveBeenCalledTimes(2)
  })
})
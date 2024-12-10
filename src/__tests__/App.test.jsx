import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders proper text', () => {
  render(<App />)
  const heading = screen.getByText(/Enter Your Farm Lobby Code/i);
  expect(heading).toBeInTheDocument();
})

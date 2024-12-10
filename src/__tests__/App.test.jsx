import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders proper text', () => {
    render(<App />);
    const heading = screen.getByText((content, element) =>
      element.tagName.toLowerCase() === 'h1' && content.includes('Enter Your Farm Lobby Code')
    );
    expect(heading).toBeInTheDocument();
  });
  
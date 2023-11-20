import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ищенко Никита Николаевич 9/i);
  expect(linkElement).toBeInTheDocument();
});

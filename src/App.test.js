import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ищенко Никита Николаевич release without node 6/i);
  expect(linkElement).toBeInTheDocument();
});

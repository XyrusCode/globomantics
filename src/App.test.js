import { render, screen } from '@testing-library/react';
import App from "./main-page";

test('renders page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Providing houses all over the world/i);
  expect(linkElement).toBeInTheDocument();
} );

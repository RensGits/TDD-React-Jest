import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders document title.', () => {
  render(<App />);
  const linkElement = screen.getByText('Test Driven Development with React & Jest');
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

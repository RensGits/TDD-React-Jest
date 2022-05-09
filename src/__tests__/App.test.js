import { render, screen } from '@testing-library/react';
import App from '../App';

it('Render without crashing', () => {
  render(<App/>)
});

test('Renders document title', () => {
  render(<App />);
  const linkElement = screen.getByText('Test Driven Development with React and Jest');
  expect(linkElement).toBeInTheDocument();
});

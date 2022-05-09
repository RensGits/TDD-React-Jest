import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../src/App';

it('Render without crashing', () => {
  shallow(<App/>)
});

test('Renders document title', () => {
  render(<App />);
  const linkElement = screen.getByText('Test Driven Development with React and Jest');
  expect(linkElement).toBeInTheDocument();
});

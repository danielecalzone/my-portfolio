/**
 * Mocks the global matchMedia function used by the browser.
 * This is necessary for components that rely on matchMedia queries.
 */
global.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

import { screen, render } from '@testing-library/react';
import App from '../App';

/**
 * Test to ensure that all components of the App render without crashing.
 */
test('Render all the components of the app without crashing', () => {
  render(<App />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('landing-section')).toBeInTheDocument();
  expect(screen.getByTestId('projects-section')).toBeInTheDocument();
  expect(screen.getByTestId('contact-me-section')).toBeInTheDocument();
});

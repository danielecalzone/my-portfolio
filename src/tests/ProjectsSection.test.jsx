import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsSection from '../components/ProjectsSection';

/**
 * Test suite to ensure clicking on "Learn More" links opens the correct page.
 */
test('Clicking on Learn More links should open the correct page', () => {
  render(<ProjectsSection />);

  const dilbertLink = screen.getByRole('link', {
    name: /Learn more about Dilbert Topic Extractor/i,
  });
  expect(dilbertLink).toHaveAttribute(
    'href',
    'https://github.com/danielecalzone/dilbert-topic-extractor'
  );
  fireEvent.click(dilbertLink);

  const podcasterLink = screen.getByRole('link', { name: /Learn more about Podcaster/i });
  expect(podcasterLink).toHaveAttribute('href', 'https://github.com/danielecalzone/podcast-app');
  fireEvent.click(podcasterLink);

  const mobileStoreLink = screen.getByRole('link', {
    name: /Learn more about Buy Mobile Devices/i,
  });
  expect(mobileStoreLink).toHaveAttribute(
    'href',
    'https://github.com/danielecalzone/buy-mobile-devices-app'
  );
  fireEvent.click(mobileStoreLink);

  const marvelLink = screen.getByRole('link', { name: /Learn more about Marvel Comics/i });
  expect(marvelLink).toHaveAttribute('href', 'https://github.com/danielecalzone/marvel-comics-app');
  fireEvent.click(marvelLink);
});

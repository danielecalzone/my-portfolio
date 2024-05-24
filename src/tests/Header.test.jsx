import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';

/**
 * Test suite for the Header component interactions.
 */
describe('Header Component Interaction Tests', () => {
  /**
   * Test to ensure clicking on social media icons opens the correct link.
   */
  test('Clicking on social media icons should open the correct link', () => {
    render(<Header />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    fireEvent.click(githubLink);
    expect(githubLink.href).toBe('https://github.com/danielecalzone/');

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    fireEvent.click(linkedinLink);
    expect(linkedinLink.href).toBe('https://www.linkedin.com/in/danielecalzone/');
  });

  /**
   * Test to ensure clicking on "Projects" scrolls to the "Projects" section.
   */
  test('Clicking on "Projects" should scroll to the "Projects" section', () => {
    render(<Header />);

    const scrollIntoViewMock = jest.fn();

    const getElementByIdSpy = jest.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    });

    const projectsLink = screen.getByText('Projects');
    fireEvent.click(projectsLink);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });

    getElementByIdSpy.mockRestore();
  });

  /**
   * Test to ensure clicking on "Contact Me" scrolls to the Contact Me section.
   */
  test('Clicking on "Contact Me" should scroll to the Contact Me section', () => {
    render(<Header />);

    const scrollIntoViewMock = jest.fn();

    const getElementByIdSpy = jest.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    });

    const projectsLink = screen.getByText('Contact Me');
    fireEvent.click(projectsLink);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });

    getElementByIdSpy.mockRestore();
  });
});

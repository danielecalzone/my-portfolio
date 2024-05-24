import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactMeSection from '../components/ContactMeSection';
import { useAlertContext } from '../hooks/useAlert';
import { useFormik } from 'formik';

jest.mock('../hooks/useAlert');

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormik: jest.fn(),
}));

/**
 * Test suite for the ContactMeSection component interactions.
 */
describe('ContactMeSection Interaction Tests', () => {
  const mockFormikValues = {
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    touched: {},
    errors: {
      firstName: 'Required',
      email: 'Required',
      comment: 'Required',
    },
    getFieldProps: jest.fn(),
    handleSubmit: jest.fn((e) => e.preventDefault()),
    resetForm: jest.fn(),
  };

  beforeEach(() => {
    useAlertContext.mockReturnValue({
      onOpen: jest.fn(),
    });

    useFormik.mockReturnValue(mockFormikValues);
  });

  /**
   * Test to ensure the contact me form validation and submission.
   */
  test('Form validation and submission', async () => {
    render(<ContactMeSection />);

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const commentTextarea = screen.getByLabelText(/Your message/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.click(nameInput);
    fireEvent.click(emailInput);
    fireEvent.click(commentTextarea);

    fireEvent.blur(nameInput);
    fireEvent.blur(emailInput);
    fireEvent.blur(commentTextarea);

    waitFor(() => {
      expect(screen.getByTestId('firstName-error')).toBeInTheDocument();
      expect(screen.getByTestId('email-error')).toBeInTheDocument();
      expect(screen.getByTestId('comment-error')).toBeInTheDocument();
    });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(commentTextarea, {
      target: { value: 'This is a valid comment with more than 25 characters.' },
    });

    waitFor(() => {
      expect(screen.queryByTestId('firstName-error')).toBeNull();
      expect(screen.queryByTestId('email-error')).toBeNull();
      expect(screen.queryByTestId('comment-error')).toBeNull();
    });

    fireEvent.click(submitButton);

    waitFor(() => {
      expect(useAlertContext().onOpen).toHaveBeenCalledWith(
        'success',
        'Form submitted successfully!'
      );
    });
  });
});

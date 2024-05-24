import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../hooks/useAlert';
import FullScreenSection from './FullScreenSection';

/**
 * ContactMeSection Component:
 * Renders a contact form section.
 * Utilizes Chakra UI components for styling and form handling with Formik and Yup.
 */

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string(),
      comment: Yup.string().required('Required').min(25, 'Must be at least 25 characters'),
    }),
    onSubmit: (values) => {
      submit(values);
    },
  });

  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        onOpen('success', response.message);
        formik.resetForm();
      } else if (response.type === 'error') {
        onOpen('error', response.message);
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      id="contactme-section"
      backgroundColor="#512DA8"
      isDarkBackground
      paddingY="10%"
      data-testid="contact-me-section"
    >
      <Heading as="h1" id="contactme-section">
        Contact me
      </Heading>
      <VStack
        as="form"
        spacing={4}
        width="100%"
        minWidth="600px"
        maxWidth="100%"
        margin="0 auto"
        onSubmit={formik.handleSubmit}
        sx={{
          '@media (max-width: 600px)': {
            minWidth: '100%',
          },
        }}
      >
        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <Input variant="outline" id="firstName" {...formik.getFieldProps('firstName')} />
          <FormErrorMessage data-testid="firstName-error">
            {formik.errors.firstName}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input variant="outline" id="email" type="email" {...formik.getFieldProps('email')} />
          <FormErrorMessage data-testid="email-error">{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="type">Type of enquiry</FormLabel>
          <Select variant="outline" id="type" {...formik.getFieldProps('type')}>
            <option style={{ color: 'black' }} value="hireMe">
              Freelance project proposal
            </option>
            <option style={{ color: 'black' }} value="openSource">
              Open source consultancy session
            </option>
            <option style={{ color: 'black' }} value="other">
              Other
            </option>
          </Select>
        </FormControl>
        <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
          <FormLabel htmlFor="comment">Your message</FormLabel>
          <Textarea variant="outline" id="comment" {...formik.getFieldProps('comment')} />
          <FormErrorMessage data-testid="comment-error">{formik.errors.comment}</FormErrorMessage>
        </FormControl>
        <Button type="submit" isLoading={isLoading}>
          Submit
        </Button>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;

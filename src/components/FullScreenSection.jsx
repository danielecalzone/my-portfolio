import { VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

/**
 * FullScreenSection Component:
 * Renders a full-screen section with customizable background color and content.
 * Illustrates the use of children prop and spread operator.
 * Utilizes Chakra UI components for styling.
 */

const FullScreenSection = ({ children, isDarkBackground, backgroundColor, ...boxProps }) => {
  const { ...restBoxProps } = boxProps;

  return (
    <VStack backgroundColor={backgroundColor} color={isDarkBackground ? 'white' : 'black'}>
      <VStack maxWidth="1280px" minHeight="100vh" {...restBoxProps}>
        {children}
      </VStack>
    </VStack>
  );
};
FullScreenSection;

FullScreenSection.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkBackground: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default FullScreenSection;

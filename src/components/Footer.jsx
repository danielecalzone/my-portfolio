import { Box, Flex } from '@chakra-ui/react';

/**
 * Footer Component:
 * Renders a footer section with author information and copyright notice.
 * Utilizes Chakra UI components for styling.
 */

const Footer = () => {
  return (
    <Box as="footer" backgroundColor="#18181b">
      <Flex
        margin="0 auto"
        px={12}
        color="white"
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        height={16}
        role="contentinfo"
        data-testid="footer"
      >
        <p>Daniele Calzone • © 2024</p>
      </Flex>
    </Box>
  );
};

export default Footer;

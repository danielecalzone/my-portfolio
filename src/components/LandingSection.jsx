import { Image, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import avatarImage from '../assets/avatar.jpg';

const greeting = "Hello, I'm Daniele!";
const bio1 = 'A passionate developer with a knack for creating stunning web experiences.';
const bio2 =
  'I specialize in building modern web applications and love working with the latest technologies.';

/**
 * LandingSection Component:
 * Renders a full-screen landing section with a greeting, biography, and avatar image.
 * Utilizes Chakra UI components for styling and responsiveness.
 */

const LandingSection = () => {
  const imageSize = useBreakpointValue({ base: '100px', md: '150px', lg: '200px' });
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });

  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      alignItems="center"
      justifyContent="center"
      data-testid="landing-section"
    >
      <VStack spacing={4} align="center" justify="center" height="100%">
        <Image borderRadius="full" boxSize={imageSize} src={avatarImage} alt="Avatar" />
        <VStack align="center" justify="center" textAlign="center">
          <Heading as="h1" size={headingSize}>
            {greeting}
          </Heading>
          <Text fontSize={textSize}>{bio1}</Text>
          <Text fontSize={textSize}>{bio2}</Text>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

import { Box, Image, Heading, Text, VStack, HStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Card Component:
 * Renders a card with title, description, image, and a link to learn more.
 * Uses Chakra UI components for styling.
 */

const Card = ({ title, description, imageUrl, learnMoreUrl }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      transition="transform 0.3s ease"
      transform={hover ? 'translateY(-10px)' : 'translateY(0)'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <Image
          src={imageUrl}
          alt={title}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
      <Box p={6}>
        <VStack align="start">
          <Heading as="h3" size="md" color="black">
            {title}
          </Heading>
          <Text color="dimgray">{description}</Text>
          <Link
            href={learnMoreUrl}
            _hover={{ textDecoration: 'none' }}
            isExternal
            aria-label={`Learn more about ${title}`}
          >
            <HStack color="black">
              <Text>Learn more</Text>
              <FontAwesomeIcon icon={faArrowRight} />
            </HStack>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  learnMoreUrl: PropTypes.string.isRequired,
};

export default Card;

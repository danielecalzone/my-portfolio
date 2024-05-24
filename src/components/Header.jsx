import { useEffect, useRef, useState } from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socials = [
  { icon: faGithub, url: 'https://github.com/danielecalzone/', label: 'Github' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/danielecalzone/', label: 'LinkedIn' },
];

/**
 * Header Component:
 * Renders a fixed header with navigation links and social media icons.
 * Hides header on scroll down and shows on scroll up.
 * Utilizes Chakra UI components for styling.
 */

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `/#${anchor}`);
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      as="header"
      top={0}
      width="100%"
      zIndex={10}
      backgroundColor="#18181b"
      transform={showHeader ? 'translateY(0)' : 'translateY(-200px)'}
      transition="transform 0.3s ease-in-out"
      data-testid="header"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => (
                <Link
                  key={social.url}
                  href={social.url}
                  isExternal
                  role="link"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick('projects')}>Projects</Link>
              <Link onClick={handleClick('contactme')}>Contact Me</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

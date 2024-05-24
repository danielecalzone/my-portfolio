import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';
import dilbertImage from '../assets/dilbert.jpg';
import podcastImage from '../assets/podcast.jpg';
import mobileStoreImage from '../assets/mobileStore.png';
import marvelImage from '../assets/marvel.png';

const projects = [
  {
    title: 'Dilbert Topic Extractor',
    description:
      'Dilbert Topic Extractor is a groundbreaking AI project focused on categorizing Dilbert comics using Neural Networks and Transformer models, featuring advanced panel analysis and automated classification techniques.',
    imageSrc: dilbertImage,
    learnMoreUrl: 'https://github.com/danielecalzone/dilbert-topic-extractor',
  },
  {
    title: 'Podcaster',
    description:
      'Podcaster is a web application that allows users to explore and listen to a wide range of podcasts. Users can discover top podcasts, view podcast details, and listen to episodes. The app provides a user-friendly interface for seamless podcast browsing and listening.',
    imageSrc: podcastImage,
    learnMoreUrl: 'https://github.com/danielecalzone/podcast-app',
  },
  {
    title: 'Buy Mobile Devices',
    description:
      'This is a web application for buying mobile devices. It allows users to browse through a list of mobile devices, view detailed product information and add products to the cart.',
    imageSrc: mobileStoreImage,
    learnMoreUrl: 'https://github.com/danielecalzone/buy-mobile-devices-app',
  },
  {
    title: 'Marvel Comics',
    description:
      'This web application allows users to access information about Marvels vast library of comics characters. Users can view a paginated list of characters and click on individual characters to see their details.',
    imageSrc: marvelImage,
    learnMoreUrl: 'https://github.com/danielecalzone/marvel-comics-app',
  },
];

/**
 * ProjectsSection Component:
 * Renders a section displaying featured projects with titles, descriptions, and images.
 * Utilizes Chakra UI components for styling.
 */

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      data-testid="projects-section"
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box display="grid" gridTemplateColumns="repeat(2,minmax(0,1fr))" gridGap={8}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageSrc}
            learnMoreUrl={project.learnMoreUrl}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

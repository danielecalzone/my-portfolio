import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';

/**
 * App Component:
 * Root component rendering the entire application.
 * Includes ChakraProvider for theme support and AlertProvider for managing alerts.
 * Renders Header, LandingSection, ProjectsSection, ContactMeSection, Footer, and Alert components.
 */

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header data-testid="header" />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

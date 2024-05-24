import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AlertContext = createContext(undefined);

/**
 * AlertProvider Component:
 * Provides a context for managing alert state across components.
 * Exposes functions for opening and closing alerts.
 */

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

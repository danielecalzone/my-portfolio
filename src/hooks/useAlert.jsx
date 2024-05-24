import { useContext } from 'react';
import { AlertContext } from '../context/alertContext';

/**
 * useAlertContext Hook:
 * Provides a convenient way to access the alert context within components.
 */

export const useAlertContext = () => useContext(AlertContext);

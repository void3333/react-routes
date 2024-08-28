import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create Context
const ThemeContext = createContext(undefined);

// Create Provider Component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme is 'light'

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Create a custom hook to use the ThemeContext
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

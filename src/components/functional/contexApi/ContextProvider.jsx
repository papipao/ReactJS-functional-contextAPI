import React, { useState, useContext } from 'react';

const ContextTheme = React.createContext();
const ContextToggle = React.createContext();

export const useTheme = () => {
  return useContext(ContextTheme);
};

export const useToggle = () => {
  return useContext(ContextToggle);
};

function ContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <ContextTheme.Provider value={darkTheme}>
      <ContextToggle.Provider value={toggleTheme}>{children}</ContextToggle.Provider>
    </ContextTheme.Provider>
  );
}

export default ContextProvider;

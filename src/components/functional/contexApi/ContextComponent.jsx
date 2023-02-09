import React from 'react';
import { useTheme, useToggle } from './ContextProvider';

function ContextComponent() {
  const dark = useTheme();
  const toggleTheme = useToggle();

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#ccc',
    color: dark ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Functional Theme</div>
    </>
  );
}

export default ContextComponent;

import React, { createContext, useState, useContext } from 'react';

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState('');
  const [sidebarContent, setSidebarContent] = useState(null);
  const [headerActionLeft, setHeaderActionLeft] = useState(null);
  const [headerActionRight, setHeaderActionRight] = useState(null);

  const value = {
    setHeaderTitle,
    headerTitle,
    sidebarContent,
    setSidebarContent,
    headerActionLeft,
    setHeaderActionLeft,
    headerActionRight,
    setHeaderActionRight,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: React.ReactNode,
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;

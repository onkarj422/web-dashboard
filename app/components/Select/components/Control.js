import React from 'react';
import { components } from 'react-select';

const Control = ({ children, ...props }) => (
  <components.Control
    className="w-32 border border-gray-300 rounded shadow-none interactive ripple"
    {...props}
  >
    {children}
  </components.Control>
);

Control.propTypes = {
  children: React.ReactNode,
};

export default Control;

import React from 'react';
import { components } from 'react-select';

const Menu = ({ children, ...props }) => (
  <components.Menu className="right-0 w-40 shadow my-1 z-50" {...props}>
    {children}
  </components.Menu>
);

Menu.propTypes = {
  children: React.ReactNode,
};

export default Menu;

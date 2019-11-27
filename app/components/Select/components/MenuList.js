import React from 'react';
import { components } from 'react-select';

const MenuList = ({ children, ...props }) => (
  <components.MenuList {...props} className="border-none shadow py-4 text-sm">
    {children}
  </components.MenuList>
);

MenuList.propTypes = {
  children: React.ReactNode,
};

export default MenuList;

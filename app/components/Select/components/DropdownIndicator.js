import React from 'react';
import { components } from 'react-select';

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <i className="fa fa-sort" />
  </components.DropdownIndicator>
);

export default DropdownIndicator;

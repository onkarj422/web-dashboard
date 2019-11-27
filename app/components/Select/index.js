import React from 'react';
import ReactSelect, { components as reactSelectComponents } from 'react-select';
import Control from './components/Control';
import SingleValue from './components/SingleValue';
import Menu from './components/Menu';
import MenuList from './components/MenuList';
import DropdownIndicator from './components/DropdownIndicator';
import IndicatorSeparator from './components/IndicatorSeparator';

const Select = ({ value, onChange, options, components, ...props }) => (
  <ReactSelect
    components={Object.assign(
      {
        Control,
        SingleValue,
        DropdownIndicator,
        IndicatorSeparator,
        Menu,
        MenuList,
      },
      components,
    )}
    value={value}
    onChange={onChange}
    options={options}
    {...props}
  />
);

Select.propTypes = ReactSelect.propTypes;

export const components = reactSelectComponents;

export default Select;

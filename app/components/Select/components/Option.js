import React from 'react';
import { components } from 'react-select';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

const Option = ({ children, ...props }) => (
  <div className="mx-2 border-b border-gray-300">
    <components.Option
      className={classNames(
        'interactive',
        props.isSelected ? 'bg-blue-500' : 'bg-transparent',
      )}
      {...props}
    >
      {children}
    </components.Option>
  </div>
);

Option.propTypes = {
  children: React.ReactNode,
  isSelected: PropTypes.bool,
};

export default Option;

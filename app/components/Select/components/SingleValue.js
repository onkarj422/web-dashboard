import React from 'react';
import { components } from 'react-select';

const SingleValue = props => (
  <components.SingleValue className="text-sm" {...props}>
    {props.children}
  </components.SingleValue>
);

SingleValue.propTypes = {
  children: React.ReactNode,
};

export default SingleValue;

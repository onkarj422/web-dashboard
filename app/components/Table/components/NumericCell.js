import React from 'react';
import { PropTypes } from 'prop-types';
import { format } from '../utils';

const NumericCell = ({ cellData }) => {
  const { isPercentage, cellValue } = cellData;
  return (
    <div>
      <span>{format(cellValue, isPercentage)}</span>
    </div>
  );
};

NumericCell.propTypes = {
  cellData: PropTypes.any,
};

export default NumericCell;

import React from 'react';
import { PropTypes } from 'prop-types';

const PageNameCell = ({ cellData }) => (
  <div className="container flex justify-between">
    <div className="w-4/5 truncate">
      <span>{cellData}</span>
    </div>
    <div>
      <i className="fa fa-external-link text-sm text-gray-600 interactive" />
    </div>
  </div>
);

PageNameCell.propTypes = {
  cellData: PropTypes.string,
};

export default PageNameCell;

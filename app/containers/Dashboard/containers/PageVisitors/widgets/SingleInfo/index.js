import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import Card from 'components/Card';

const SingleInfo = ({ title, count, difference, isPositive }) => {
  const getValueString = c => {
    if (c.isPercentage) {
      return `${c.value}%`;
    }
    if (c.isSeconds) {
      const minutes = Math.floor(c.value / 60);
      const seconds = c.value - minutes * 60;
      return `${minutes}m ${seconds}s`;
    }
    return c.value;
  };

  return (
    <Card>
      <div className="widget-title">
        <div className="title-text">
          <span>{title}</span>
        </div>
        <div className="main-value">
          <span>{getValueString(count)}</span>
        </div>
        <div
          className={classNames(
            'mb-2',
            isPositive ? 'text-green-500' : 'text-red-500',
          )}
        >
          <span>
            {`${isPositive ? '+' : '-'}${difference}%`}&nbsp;&nbsp;
            <i className={`fa fa-${isPositive ? 'plus' : 'minus'}-square-o`} />
          </span>
        </div>
      </div>
    </Card>
  );
};

SingleInfo.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  difference: PropTypes.number,
  isPositive: PropTypes.bool,
};

export default SingleInfo;

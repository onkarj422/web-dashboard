import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Card = ({ children, padding, height, width }) => (
  <div className={classNames('card', padding, height, width)}>{children}</div>
);

Card.propTypes = {
  children: React.ReactNode,
  padding: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  padding: 'p-6',
  height: 'h-64',
  width: 'w-full',
};

export default Card;

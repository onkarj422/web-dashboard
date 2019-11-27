import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import './styles.scss';

const Header = ({
  children,
  className,
  fixed,
  title,
  actionLeft,
  actionRight,
  height,
}) => (
  <div
    className={classNames(
      className,
      'container header',
      height,
      fixed && 'fixed-top',
    )}
  >
    <Choose>
      <When condition={!!children}>{children}</When>
      <When condition={title || actionLeft || actionRight}>
        <If condition={actionLeft}>
          <div className="mr-2">{actionLeft}</div>
        </If>
        <If condition={title}>{title}</If>
        <If condition={actionRight}>
          <Choose>
            <When condition={Array.isArray(actionRight)}>
              <For each="action" of={actionRight} index="i">
                <div className={`ml-${i === 0 ? 'auto' : '2'}`}>{action}</div>
              </For>
            </When>
            <When condition={!Array.isArray(actionRight)}>
              <div className="ml-auto">{actionRight}</div>
            </When>
          </Choose>
        </If>
      </When>
    </Choose>
  </div>
);

Header.propTypes = {
  children: React.ReactNode,
  fixed: PropTypes.bool,
  title: PropTypes.string,
  actionLeft: PropTypes.oneOf([React.ReactNode, PropTypes.array]),
  actionRight: PropTypes.oneOf([React.ReactNode, PropTypes.array]),
  height: PropTypes.string,
  className: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  fixed: false,
  title: '',
  actionLeft: null,
  actionRight: null,
  height: 'h-16',
  className: '',
};

export default Header;

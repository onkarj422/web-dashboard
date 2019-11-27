/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import Collapse from '@kunukn/react-collapse';
import routes from 'containers/App/routes';
import { PropTypes } from 'prop-types';

const Navigation = ({ location }) => {
  const [isOpen, setCollapse] = useState(false);
  const currPath = location.pathname;

  const renderRoute = route => (
    <div className="flex items-center w-full">
      <i
        className={classNames(
          route.iconClass,
          currPath === route.path ||
            (route.routes && route.routes.map(r => r.path).includes(currPath))
            ? 'text-blue-600'
            : 'text-gray-600',
          'mr-4 ml-2',
        )}
      />
      <span
        className={classNames(
          !route.routes && route.path === currPath
            ? 'text-blue-600'
            : 'text-gray-900',
          'text-xs font-bold',
        )}
      >
        {route.label}
      </span>
      <If condition={Array.isArray(route.routes) && route.routes.length}>
        <i
          className={classNames(
            isOpen ? 'fa fa-caret-up' : 'fa fa-caret-down',
            'text-xs text-gray-600 ml-auto mr-2',
          )}
        />
      </If>
    </div>
  );

  const renderChildRoutes = childRoutes => (
    <For each="route" of={childRoutes}>
      <Link to={route.path}>
        <div className="flex h-10 items-center w-full interactive">
          <i className="fa fa-square text-transparent mr-4 ml-2" />
          <span
            className={classNames(
              route.path === currPath ? 'text-blue-600' : 'text-gray-600',
              'text-xs font-bold',
            )}
          >
            {route.label}
          </span>
        </div>
      </Link>
    </For>
  );

  const onClickCollapse = () => {
    setCollapse(!isOpen);
  };

  return (
    <div>
      <For each="route" of={routes}>
        <Link to={route.path}>
          <div
            onClick={Array.isArray(route.routes) ? onClickCollapse : null}
            className="container h-12 border-b border-gray-300 flex items-center interactive"
          >
            {renderRoute(route)}
          </div>
        </Link>
        <If condition={Array.isArray(route.routes)}>
          <Collapse isOpen={isOpen}>
            <div className="pb-1">{renderChildRoutes(route.routes)}</div>
          </Collapse>
        </If>
      </For>
    </div>
  );
};

Navigation.propTypes = {
  location: PropTypes.object,
};

export default withRouter(Navigation);

/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';

const Router = ({ routes }) => {
  const renderRoute = ({ path, exact, ...route }, index) => (
    <Route key={index} path={path} exact={exact} route={route}>
      {props => renderComponent(props, route)}
    </Route>
  );

  const renderComponent = (
    props,
    { component: Component, routes: childRoutes, ...route },
  ) => {
    // eslint-disable-next-line react/prop-types
    const { match } = props;
    return (
      <If condition={match}>
        <Component {...props} route={route} routes={childRoutes}>
          <If condition={childRoutes && childRoutes.length > 0}>
            <For each="childRoute" of={childRoutes} index="index">
              {renderRoute(childRoute, index)}
            </For>
          </If>
        </Component>
      </If>
    );
  };

  return (
    <For each="route" of={routes} index="index">
      {renderRoute(route, index)}
    </For>
  );
};

Router.propTypes = {
  routes: PropTypes.array,
};

export default Router;
